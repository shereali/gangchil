<template>
  <section style="padding: 6.5rem 0;">
    <div class="gangchil-container">
      <div style="text-align: center; margin-bottom: 3.5rem;">
        <div class="section-badge">Development Portfolio</div>
        <h2 class="section-title">Designed For Living &amp; High-Growth Value</h2>
        <p class="section-subtitle" style="margin: 0 auto;">
          Explore prime land for your custom family villa, ready condominium apartments, or 5-star deeded hotel investment shares.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        <!-- Land & Plots -->
        <div class="glass-panel" style="overflow: hidden; display: flex; flex-direction: column; border-radius: var(--radius-md);">
          <div style="height: 230px; position: relative; overflow: hidden;">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
              alt="Residential Land and Plots"
              style="width: 100%; height: 100%; object-fit: cover;"
            />
            <div style="position: absolute; top: 1rem; left: 1rem; background: var(--gold-gradient); color: var(--text-inverse); font-weight: 700; font-size: 0.72rem; letter-spacing: 0.05em; text-transform: uppercase; padding: 0.35rem 0.85rem; border-radius: var(--radius-full);">
              Core Living Choice
            </div>
          </div>
          <div style="padding: 2.25rem; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h3 style="font-size: 1.4rem; color: var(--gold-light); margin-bottom: 0.75rem; font-weight: 700;">
                Residential &amp; Commercial Land
              </h3>
              <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.5rem;">
                Demarcated 3, 5, 10, and 20 Katha plots with paved 40–120ft roads, electrical substations, and lakefront views. Ready for immediate boundary wall construction.
              </p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.88rem; color: var(--text-primary); margin-bottom: 1.75rem;">
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--gold-light); font-size: 0.9rem;">✓</span> 3 to 20 Katha Sizing (2,160 – 14,400 Sq.Ft)
                </li>
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--gold-light); font-size: 0.9rem;">✓</span> Sector 1 &amp; 2 Ready for Immediate Handover
                </li>
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--gold-light); font-size: 0.9rem;">✓</span> Up to 60-Month Zero-Interest Installments
                </li>
              </ul>
            </div>
            <NuxtLink to="/plots" class="btn-gold" style="width: 100%;">
              Explore Land Plots
            </NuxtLink>
          </div>
        </div>

        <!-- Luxury Flats -->
        <div class="glass-panel" style="overflow: hidden; display: flex; flex-direction: column; border-radius: var(--radius-md);">
          <div style="height: 230px; position: relative; overflow: hidden;">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Flats and Duplexes"
              style="width: 100%; height: 100%; object-fit: cover;"
            />
            <div style="position: absolute; top: 1rem; left: 1rem; background: var(--emerald-primary); color: #081410; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.05em; text-transform: uppercase; padding: 0.35rem 0.85rem; border-radius: var(--radius-full);">
              Ready &amp; Underway Condos
            </div>
          </div>
          <div style="padding: 2.25rem; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h3 style="font-size: 1.4rem; color: var(--emerald-light); margin-bottom: 0.75rem; font-weight: 700;">
                Luxury Duplex Flats &amp; Condominiums
              </h3>
              <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.5rem;">
                Contemporary architectural apartments and sky penthouses featuring private terrace gardens, 2-car covered parking, and rooftop infinity amenities.
              </p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.88rem; color: var(--text-primary); margin-bottom: 1.75rem;">
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--emerald-light); font-size: 0.9rem;">✓</span> 1,850 to 3,400 Sq.Ft Unit Layouts
                </li>
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--emerald-light); font-size: 0.9rem;">✓</span> 4 Bed + 5 Bath Sky Duplex Options
                </li>
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--emerald-light); font-size: 0.9rem;">✓</span> 24/7 Smart Access &amp; Power Backup
                </li>
              </ul>
            </div>
            <NuxtLink to="/flats" class="btn-emerald" style="width: 100%;">
              Explore Luxury Flats
            </NuxtLink>
          </div>
        </div>

        <!-- Hotel & Commercial Suites -->
        <div class="glass-panel" style="overflow: hidden; display: flex; flex-direction: column; border-radius: var(--radius-md);">
          <div style="height: 230px; position: relative; overflow: hidden;">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
              alt="Hotel Suites and Commercial Shares"
              style="width: 100%; height: 100%; object-fit: cover;"
            />
            <div style="position: absolute; top: 1rem; left: 1rem; background: rgba(255, 255, 255, 0.15); border: 1px solid var(--border-subtle); color: #ffffff; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.05em; text-transform: uppercase; padding: 0.35rem 0.85rem; border-radius: var(--radius-full);">
              Commercial ROI Asset
            </div>
          </div>
          <div style="padding: 2.25rem; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h3 style="font-size: 1.4rem; color: #f5f7f6; margin-bottom: 0.75rem; font-weight: 700;">
                Hotel Suites &amp; Commercial Shares
              </h3>
              <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.5rem;">
                Co-own 5-star hotel suites with registered sub-registry deed shares. Benefit from guaranteed 14% annual rental returns and 30 complimentary luxury stay days per year.
              </p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.88rem; color: var(--text-primary); margin-bottom: 1.75rem;">
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--gold-light); font-size: 0.9rem;">✓</span> Guaranteed 14% Annual Rental Yield
                </li>
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--gold-light); font-size: 0.9rem;">✓</span> 30 Days Free Stay Voucher Per Year
                </li>
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="color: var(--gold-light); font-size: 0.9rem;">✓</span> Professionally Managed 5-Star Hospitality
                </li>
              </ul>
            </div>
            <NuxtLink to="/hotel-suites" class="btn-outline" style="width: 100%;">
              Explore Hotel Suites
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
