# VPS deployment

The workflow builds the Nuxt SSR image on GitHub-hosted runners and transfers the image to the VPS. It deploys only the Nuxt application; `backend/` currently contains Laravel source fragments but no Composer manifest or `artisan` entry point.

## GitHub Actions secrets

In **Settings → Secrets and variables → Actions**, add:

- `VPS_HOST`: `217.216.37.217`
- `VPS_PORT`: `22` (optional; defaults to 22)
- `VPS_USER`: `gangchilhomes`
- `VPS_SSH_KEY`: the raw PEM or single-line Base64 private key whose public key is authorized for `gangchilhomes` on the VPS

Never commit the private key or place it in chat. The deployment account must have Docker access and write access to `/var/www/gangchilhomes`.

## VPS prerequisites

- Docker Compose v2 installed.
- The external Docker network `caddy_net` exists.
- `/var/www/gangchilhomes` is owned/writable by `gangchilhomes`.
- Caddy routes `gangchilhomes.com` (and optionally `www.gangchilhomes.com`) to `gangchilhomes-frontend-1:3000`.
- DNS A record for `gangchilhomes.com` points to the VPS before Caddy can issue HTTPS certificates.

The workflow performs a production Nuxt build on every push to `main`. The deploy job skips until the required SSH secrets exist, and checks Docker/network/path prerequisites before transferring the image.
