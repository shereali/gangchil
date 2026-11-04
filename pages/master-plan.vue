<template>
  <div style="padding: 3rem 0 6rem 0;">
    <div class="gangchil-container">
      <div style="margin-bottom: 2rem;">
        <div class="section-badge">Master Layout & Urban Architecture</div>
        <h1 class="section-title">Gangchil 3,500-Acre Master Township</h1>
        <p class="section-subtitle">
          An environmentally integrated green metropolis engineered for modern family living, central lakes, 40 to 120-feet avenues, English medium educational institutions, and healthcare centers.
        </p>
      </div>

      <MasterPlanViewer
        @book-sector="$emit('book-sector', $event)"
        @open-site-visit="$emit('open-site-visit')"
      />

      <!-- Detailed Sector Breakdown Table -->
      <div class="glass-panel" style="margin-top: 4rem; padding: 2.5rem;">
        <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--gold-light); margin-bottom: 1.5rem;">
          Township Sector Planning Breakdown
        </h3>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
            <thead>
              <tr style="border-bottom: 1px solid var(--border-gold); color: var(--gold-light);">
                <th style="padding: 1rem;">Sector / Zone</th>
                <th style="padding: 1rem;">Available Plot Sizes</th>
                <th style="padding: 1rem;">Road Widths</th>
                <th style="padding: 1rem;">Development Status</th>
                <th style="padding: 1rem;">Handover Date</th>
                <th style="padding: 1rem;">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="padding: 1rem; font-weight: 700; color: var(--text-primary);">Sector 1 (Ready)</td>
                <td style="padding: 1rem; color: var(--text-secondary);">3 & 5 Katha</td>
                <td style="padding: 1rem; color: var(--emerald-light);">40 & 60 Feet</td>
                <td style="padding: 1rem;"><span class="property-badge badge-ready">100% Ready</span></td>
                <td style="padding: 1rem; color: var(--text-primary);">Immediate</td>
                <td style="padding: 1rem;">
                  <button @click="$emit('open-site-visit')" class="btn-gold" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">Book Tour</button>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="padding: 1rem; font-weight: 700; color: var(--text-primary);">Sector 2 (Developing)</td>
                <td style="padding: 1rem; color: var(--text-secondary);">5 & 10 Katha</td>
                <td style="padding: 1rem; color: var(--emerald-light);">40, 60 & 80 Feet</td>
                <td style="padding: 1rem;"><span class="property-badge badge-upcoming">75% Complete</span></td>
                <td style="padding: 1rem; color: var(--text-primary);">Dec 2026</td>
                <td style="padding: 1rem;">
                  <button @click="$emit('open-site-visit')" class="btn-gold" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">Book Tour</button>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="padding: 1rem; font-weight: 700; color: var(--text-primary);">Sector 3 (Lakefront VIP)</td>
                <td style="padding: 1rem; color: var(--text-secondary);">10 & 20 Katha</td>
                <td style="padding: 1rem; color: var(--emerald-light);">60 & 80 Feet Boulevard</td>
                <td style="padding: 1rem;"><span class="property-badge badge-upcoming">Lake Digging 90%</span></td>
                <td style="padding: 1rem; color: var(--text-primary);">Mid 2027</td>
                <td style="padding: 1rem;">
                  <button @click="$emit('open-site-visit')" class="btn-gold" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">Book Tour</button>
                </td>
              </tr>
              <tr>
                <td style="padding: 1rem; font-weight: 700; color: var(--text-primary);">Commercial Highway Zone</td>
                <td style="padding: 1rem; color: var(--text-secondary);">20+ Katha (High-Rise)</td>
                <td style="padding: 1rem; color: var(--emerald-light);">120 Feet 4-Lane Highway</td>
                <td style="padding: 1rem;"><span class="property-badge badge-ready">Ready Handover</span></td>
                <td style="padding: 1rem; color: var(--text-primary);">Immediate</td>
                <td style="padding: 1rem;">
                  <button @click="$emit('open-site-visit')" class="btn-gold" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">Book Tour</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MasterPlanViewer from '~/components/home/MasterPlanViewer.vue'

defineEmits(['book-sector', 'open-site-visit'])

useHead({
  title: 'Interactive Masterplan | Gangchil Real Estate',
  meta: [
    { name: 'description', content: 'Explore 3,500-acre masterplan layout with sector dimensions, road widths, natural lake locations, and plot availability.' }
  ]
})
</script>
