#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR="/var/www/gangchilhomes"
COMPOSE_FILE="$APP_DIR/docker-compose.yml"
DEPLOY_DIR="$APP_DIR/deploy"
IMAGE_NAME="gangchil-homes"
IMAGE_ARCHIVE="$DEPLOY_DIR/app-image.tar.gz"
CURRENT_TAG_FILE="$DEPLOY_DIR/current_image_tag"
NEW_TAG="${1:-${IMAGE_TAG:-}}"

log() { printf '[deploy] %s\n' "$*"; }
fail() { printf '[deploy] ERROR: %s\n' "$*" >&2; exit 1; }

[[ -n "$NEW_TAG" ]] || fail 'IMAGE_TAG argument is required'
[[ -f "$IMAGE_ARCHIVE" ]] || fail "Image archive missing: $IMAGE_ARCHIVE"
[[ -f "$COMPOSE_FILE" ]] || fail "Compose file missing: $COMPOSE_FILE"
docker network inspect caddy_net >/dev/null 2>&1 || fail 'External Docker network caddy_net is missing'

PREVIOUS_TAG=""
[[ -f "$CURRENT_TAG_FILE" ]] && PREVIOUS_TAG="$(<"$CURRENT_TAG_FILE")"

log "Loading image $IMAGE_NAME:$NEW_TAG"
gzip -dc "$IMAGE_ARCHIVE" | docker load >/dev/null
docker image inspect "$IMAGE_NAME:$NEW_TAG" >/dev/null 2>&1 || fail 'Loaded image tag does not match the requested deployment tag'

log 'Starting the new container'
if ! IMAGE_TAG="$NEW_TAG" docker compose -f "$COMPOSE_FILE" up -d --no-build --remove-orphans; then
  fail 'docker compose failed to start the new version'
fi

log 'Waiting for the container health check'
HEALTH=''
for _ in $(seq 1 40); do
  HEALTH="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' gangchilhomes-frontend-1 2>/dev/null || true)"
  [[ "$HEALTH" == 'healthy' ]] && break
  [[ "$HEALTH" == 'unhealthy' || "$HEALTH" == 'exited' || "$HEALTH" == 'dead' ]] && break
  sleep 3
done

if [[ "$HEALTH" != 'healthy' ]]; then
  log "New container did not become healthy (state: ${HEALTH:-missing})"
  if [[ -n "$PREVIOUS_TAG" ]]; then
    log "Rolling back to $PREVIOUS_TAG"
    IMAGE_TAG="$PREVIOUS_TAG" docker compose -f "$COMPOSE_FILE" up -d --no-build || true
  else
    docker compose -f "$COMPOSE_FILE" rm -sf web || true
  fi
  fail 'Deployment health check failed; previous version was retained when available'
fi

printf '%s\n' "$NEW_TAG" > "$CURRENT_TAG_FILE"
rm -f "$IMAGE_ARCHIVE"
log "Deployment successful: $IMAGE_NAME:$NEW_TAG is healthy"
docker compose -f "$COMPOSE_FILE" ps
