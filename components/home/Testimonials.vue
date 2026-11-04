<template>
  <section style="padding: 6.5rem 0; background: #060e0a; border-top: 1px solid var(--border-subtle);">
    <div class="gangchil-container">
      <div style="text-align: center; margin-bottom: 3.5rem;">
        <div class="section-badge">Verified Buyer Case Studies</div>
        <h2 class="section-title">Trusted By Over 1,250 Landowners</h2>
        <p class="section-subtitle" style="margin: 0 auto;">
          Real feedback from professionals, doctors, engineers, and non-resident Bangladeshis who secured plots for living and generational wealth.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        <!-- Testimonial 1 -->
        <div class="glass-panel" style="padding: 2.25rem; display: flex; flex-direction: column; justify-content: space-between; border-radius: var(--radius-md);">
          <div>
            <div style="display: flex; gap: 0.25rem; margin-bottom: 1.25rem; color: var(--gold-light);">
              <svg v-for="i in 5" :key="i" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <p style="color: var(--text-primary); font-size: 0.96rem; line-height: 1.7; margin-bottom: 1.5rem;">
              “I purchased 5 Katha in Sector 1 for my family home. The deed registration at the Sub-Registry office and mutation were completed in my presence within 3 weeks. The 60ft avenue road access is already paved and clean.”
            </p>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1.25rem;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1px solid var(--border-gold); color: var(--gold-light); font-weight: 700; font-size: 0.95rem; display: flex; align-items: center; justify-content: center;">
              NS
            </div>
            <div>
              <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">Engr. Nurunnobi Sumon</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Plot #142 • Sector 1 (5 Katha) • Registered 2024</div>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="glass-panel" style="padding: 2.25rem; display: flex; flex-direction: column; justify-content: space-between; border-radius: var(--radius-md);">
          <div>
            <div style="display: flex; gap: 0.25rem; margin-bottom: 1.25rem; color: var(--gold-light);">
              <svg v-for="i in 5" :key="i" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <p style="color: var(--text-primary); font-size: 0.96rem; line-height: 1.7; margin-bottom: 1.5rem;">
              “Living in London, legal authenticity was my #1 priority. Gangchil’s legal department sent me complete CS, SA, RS, BS records beforehand, and handled the Power of Attorney (POA) attestation flawlessly.”
            </p>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1.25rem;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(0, 210, 133, 0.15); border: 1px solid var(--border-emerald); color: var(--emerald-light); font-weight: 700; font-size: 0.95rem; display: flex; align-items: center; justify-content: center;">
              AR
            </div>
            <div>
              <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">A. R. Minto (NRB, UK)</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Plot #208 • Sector 3 Lakefront • Registered 2025</div>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="glass-panel" style="padding: 2.25rem; display: flex; flex-direction: column; justify-content: space-between; border-radius: var(--radius-md);">
          <div>
            <div style="display: flex; gap: 0.25rem; margin-bottom: 1.25rem; color: var(--gold-light);">
              <svg v-for="i in 5" :key="i" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <p style="color: var(--text-primary); font-size: 0.96rem; line-height: 1.7; margin-bottom: 1.5rem;">
              “The 60-month direct developer installment facility without bank interest made it realistic for our family to secure a 10 Katha corner plot. Foundation work for our duplex villa is beginning this quarter.”
            </p>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1.25rem;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(255, 255, 255, 0.08); border: 1px solid var(--border-subtle); color: #fff; font-weight: 700; font-size: 0.95rem; display: flex; align-items: center; justify-content: center;">
              JH
            </div>
            <div>
              <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">Dr. Julfiker Hasnat</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Plot #79 • Sector 2 (10 Katha Corner) • Handover 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
