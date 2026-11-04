<template>
  <div style="padding: 3rem 0 6rem 0;">
    <div class="gangchil-container">
      <div style="margin-bottom: 3rem;">
        <div class="section-badge" style="background: rgba(99, 102, 241, 0.15); border-color: rgba(99, 102, 241, 0.4); color: #a5b4fc;">
          Commercial Hospitality Investment
        </div>
        <h1 class="section-title">Hotel Suites & Commercial Ownership Shares</h1>
        <p class="section-subtitle">
          Earn guaranteed passive rental income with 5-star hotel ownership shares. Complete sub-registry deed ownership with 14% annual return and 30 days complimentary holiday stays.
        </p>
      </div>

      <div class="property-grid">
        <PlotCard
          v-for="suite in hotelSuites"
          :key="suite.id"
          :plot="suite"
          @book-plot="$emit('book-plot', $event)"
        />
      </div>

      <!-- ROI & Investor Benefits -->
      <div class="glass-panel" style="margin-top: 4rem; padding: 3rem; border-color: rgba(99, 102, 241, 0.4);">
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: #a5b4fc; margin-bottom: 1.5rem; text-align: center;">
          Why Invest in Gangchil Hotel Suites?
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 2rem;">
          <div style="background: rgba(0,0,0,0.4); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-size: 1.8rem; color: var(--gold-light); font-weight: 800; margin-bottom: 0.5rem;">14% ROI</div>
            <h4 style="color: var(--text-primary); margin-bottom: 0.25rem;">Guaranteed Rental Yield</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">Quarterly rental returns deposited directly into your bank account.</p>
          </div>

          <div style="background: rgba(0,0,0,0.4); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-size: 1.8rem; color: var(--emerald-light); font-weight: 800; margin-bottom: 0.5rem;">30 Days</div>
            <h4 style="color: var(--text-primary); margin-bottom: 0.25rem;">Complimentary Stays</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">Enjoy free 5-star resort vacations for your family every single year.</p>
          </div>

          <div style="background: rgba(0,0,0,0.4); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-size: 1.8rem; color: #a5b4fc; font-weight: 800; margin-bottom: 0.5rem;">Deed Registry</div>
            <h4 style="color: var(--text-primary); margin-bottom: 0.25rem;">Permanent Asset Ownership</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">Registered undivided land share and unit deed with inheritance rights.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePlotInventory } from '~/composables/usePlotInventory'
import PlotCard from '~/components/common/PlotCard.vue'

defineEmits(['book-plot'])
const { plots } = usePlotInventory()

const hotelSuites = computed(() => {
  return plots.value.filter(p => p.category === 'hotel-suite')
})

useHead({
  title: 'Hotel Suites & Commercial Shares | Gangchil Real Estate',
  meta: [
    { name: 'description', content: 'Invest in 5-star luxury hotel suites with guaranteed 14% annual rental returns and deed registration.' }
  ]
})
</script>
