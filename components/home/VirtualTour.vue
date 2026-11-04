<template>
  <section style="padding: 6.5rem 0;">
    <div class="gangchil-container">
      <div style="text-align: center; margin-bottom: 3.5rem;">
        <div class="section-badge">Connectivity &amp; Transit Hub</div>
        <h2 class="section-title">Strategic Location On Dhaka-Savar 4-Lane Highway</h2>
        <p class="section-subtitle" style="margin: 0 auto;">
          Located directly along the northern development corridor of Dhaka with rapid access to commercial centers, universities, and transit nodes.
        </p>
      </div>

      <!-- Drone & Elevation Perspective Container -->
      <div class="glass-panel" style="overflow: hidden; padding: 1.25rem; margin-bottom: 2.5rem; border-radius: var(--radius-lg);">
        <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; height: 440px; background: #000;">
          <img
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
            alt="Scenic Elevated Masterplan Perspective"
            style="width: 100%; height: 100%; object-fit: cover; opacity: 0.85;"
          />
          <div style="position: absolute; inset: 0; background: linear-gradient(0deg, rgba(6,16,12,0.95) 0%, rgba(6,16,12,0.3) 60%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 2.5rem;">
            <div style="display: flex; gap: 0.75rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
              <span style="font-size: 0.8rem; background: rgba(212,175,55,0.2); color: var(--gold-light); border: 1px solid var(--border-gold); padding: 0.25rem 0.65rem; border-radius: var(--radius-full);">
                Natural Red-Soil High Elevation
              </span>
              <span style="font-size: 0.8rem; background: rgba(0,210,133,0.2); color: var(--emerald-light); border: 1px solid var(--border-emerald); padding: 0.25rem 0.65rem; border-radius: var(--radius-full);">
                100% Flood-Free Zone
              </span>
            </div>
            <div style="font-size: 1.85rem; font-family: var(--font-serif); font-weight: 700; color: #ffffff; margin-bottom: 0.5rem;">
              3,500 Acres of Planned Nature &amp; Modern Urban Life
            </div>
            <p style="color: var(--text-secondary); max-width: 700px; font-size: 0.95rem; line-height: 1.6;">
              Surrounded by scenic natural water bodies, high elevated ground requiring minimal piling cost, and fresh air just 20 minutes from the heart of the capital.
            </p>
          </div>
        </div>
      </div>

      <!-- Distance / Travel Times Matrix -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
        <div class="glass-panel" style="padding: 1.75rem; text-align: center; border-radius: var(--radius-md);">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(212,175,55,0.12); border: 1px solid var(--border-gold); margin: 0 auto 0.75rem auto; display: flex; align-items: center; justify-content: center; color: var(--gold-light);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
          <div style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--gold-light); font-weight: 700; margin-bottom: 0.25rem;">
            15–20 Mins
          </div>
          <div style="font-size: 0.88rem; color: var(--text-primary); font-weight: 600;">Gabtoli Bus Terminal &amp; Aminbazar</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Direct 4-Lane Highway Drive</div>
        </div>

        <div class="glass-panel" style="padding: 1.75rem; text-align: center; border-radius: var(--radius-md);">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(0,210,133,0.12); border: 1px solid var(--border-emerald); margin: 0 auto 0.75rem auto; display: flex; align-items: center; justify-content: center; color: var(--emerald-light);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--emerald-light); font-weight: 700; margin-bottom: 0.25rem;">
            20–25 Mins
          </div>
          <div style="font-size: 0.88rem; color: var(--text-primary); font-weight: 600;">Mirpur-1 &amp; Technical Junction</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Smooth Signal-Free Commute</div>
        </div>

        <div class="glass-panel" style="padding: 1.75rem; text-align: center; border-radius: var(--radius-md);">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 1px solid var(--border-subtle); margin: 0 auto 0.75rem auto; display: flex; align-items: center; justify-content: center; color: #fff;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
            </svg>
          </div>
          <div style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--text-primary); font-weight: 700; margin-bottom: 0.25rem;">
            30 Mins
          </div>
          <div style="font-size: 0.88rem; color: var(--text-primary); font-weight: 600;">Hazrat Shahjalal Airport</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Via Dhaka Elevated Expressway</div>
        </div>

        <div class="glass-panel" style="padding: 1.75rem; text-align: center; border-radius: var(--radius-md);">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(212,175,55,0.12); border: 1px solid var(--border-gold); margin: 0 auto 0.75rem auto; display: flex; align-items: center; justify-content: center; color: var(--gold-light);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
          </div>
          <div style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--gold-light); font-weight: 700; margin-bottom: 0.25rem;">
            120 Feet
          </div>
          <div style="font-size: 0.88rem; color: var(--text-primary); font-weight: 600;">Direct Highway Frontage</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Dedicated Flyover Entry &amp; Exit</div>
        </div>
      </div>
    </div>
  </section>
</template>
