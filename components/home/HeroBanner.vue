<template>
  <section class="hero-section">
    <div class="gangchil-container">
      <div class="hero-grid">
        <!-- Left Headline & High-Converting Client-Hunter Narrative -->
        <div>
          <div class="section-badge">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--emerald-light); margin-right: 0.35rem; box-shadow: 0 0 10px var(--emerald-light);"></span>
            Dhaka’s 3,500-Acre Premier Mega Township • Direct 120ft Highway Frontage
          </div>

          <h1 class="hero-headline">
            Own High-Yield Land In Dhaka’s Fastest Growing Corridor. <span class="text-gold-gradient">Guaranteed Spot Deed</span> &amp; Ready Living.
          </h1>

          <p class="hero-lead-text">
            Stop risking capital on speculative real estate. Secure demarcated residential (3, 5, 10, 20 Katha) &amp; 120ft commercial highway plots with authentic CS, SA, RS &amp; BS Khatian verification, underground utilities, and flexible 60-month zero-interest in-house installments.
          </p>

          <div class="hero-cta-group">
            <button @click="$emit('open-site-visit')" class="btn-gold" style="box-shadow: 0 10px 25px rgba(212, 175, 55, 0.25);">
              Claim Your Plot &amp; Free VIP Site Tour
            </button>
            <button @click="$emit('open-brochure')" class="btn-outline">
              Download 3,500-Acre Masterplan (PDF)
            </button>
          </div>

          <!-- Grounded Trust & Legal Guarantees -->
          <div class="trust-badges-row">
            <div class="trust-badge-item">
              <div class="trust-badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <div class="trust-badge-text">Instant Spot Sub-Registry</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">CS • SA • RS • BS Mutation Ready</div>
              </div>
            </div>

            <div class="trust-badge-item">
              <div class="trust-badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <div class="trust-badge-text">100% Paved &amp; Powered</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">40–120ft Roads • 33/11kV Grid</div>
              </div>
            </div>

            <div class="trust-badge-item">
              <div class="trust-badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <div class="trust-badge-text">Direct Developer 0% EMI</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Up to 60 Months • 15% Cash Rebate</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Quick Plot Finder Widget (High-Conversion Funnel) -->
        <div>
          <div class="finder-card">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
              <div class="finder-title" style="margin-bottom: 0;">Direct Inventory Finder</div>
              <span style="font-size: 0.75rem; background: rgba(0, 210, 133, 0.15); color: var(--emerald-light); padding: 0.2rem 0.5rem; border-radius: var(--radius-full); border: 1px solid var(--border-emerald);">Live Stock</span>
            </div>
            <div class="finder-sub">Check available inventory and calculate your exact monthly EMI</div>

            <form @submit.prevent="handleQuickSearch">
              <div class="form-group">
                <label class="form-label">Property Category</label>
                <select v-model="searchForm.category" class="custom-select">
                  <option value="residential-land">Residential Land Plots (3, 5, 10, 20 Katha)</option>
                  <option value="commercial-land">120ft Highway Commercial Frontage</option>
                  <option value="flat">Luxury Condominiums &amp; Sky Duplexes</option>
                  <option value="hotel-suite">5-Star Hotel Suites (14% Annual Yield)</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Sector Selection</label>
                <select v-model="searchForm.sector" class="custom-select">
                  <option value="all">All Available Sectors</option>
                  <option value="sector-1">Sector 1 (100% Ready Handover &amp; Living)</option>
                  <option value="sector-2">Sector 2 (Active Development Phase)</option>
                  <option value="sector-3">Sector 3 (Lakefront VIP Enclave)</option>
                  <option value="commercial">Highway Commercial Boulevard</option>
                </select>
              </div>

              <div class="finder-grid-cols-2">
                <div class="form-group">
                  <label class="form-label">Plot Size</label>
                  <select v-model="searchForm.size" class="custom-select">
                    <option value="3">3 Katha (2,160 Sq.Ft)</option>
                    <option value="5">5 Katha (3,600 Sq.Ft)</option>
                    <option value="10">10 Katha (7,200 Sq.Ft)</option>
                    <option value="20">20 Katha (14,400 Sq.Ft)</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Payment Preference</label>
                  <select v-model="searchForm.paymentType" class="custom-select">
                    <option value="installment">60M In-House EMI (0% Interest)</option>
                    <option value="onetime">One-Time Cash (15% Rebate)</option>
                  </select>
                </div>
              </div>

              <button type="submit" class="btn-gold" style="width: 100%; margin-top: 0.75rem; font-size: 0.95rem;">
                Check Available Plots &amp; Lock Price
              </button>
            </form>

            <div style="text-align: center; margin-top: 1rem; font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
              <span>⚡ Direct Developer Booking</span> • <span>No Hidden Brokerage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

defineEmits(['open-site-visit', 'open-brochure'])
const router = useRouter()

const searchForm = reactive({
  category: 'residential-land',
  sector: 'all',
  size: '5',
  paymentType: 'installment'
})

const handleQuickSearch = () => {
  router.push({
    path: '/plots',
    query: {
      category: searchForm.category,
      sector: searchForm.sector,
      size: searchForm.size
    }
  })
}
</script>
