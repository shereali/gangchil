<template>
  <div style="padding: 3rem 0 6rem 0;">
    <div class="gangchil-container">
      <!-- Breadcrumb & Header -->
      <div style="margin-bottom: 3rem;">
        <div class="section-badge">Prime Land Inventory</div>
        <h1 class="section-title">Residential & Commercial Plots For Sale</h1>
        <p class="section-subtitle">
          Explore demarcated 3, 5, 10, and 20 Katha plots with instant handover, wide roads, and flexible 60-month installment plans.
        </p>
      </div>

      <!-- Filter Controls Bar -->
      <div class="glass-panel" style="padding: 1.5rem; margin-bottom: 3rem;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem;">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Sector</label>
            <select v-model="filterSector" class="custom-select">
              <option value="all">All Sectors</option>
              <option value="Sector 1 (Ready Handover)">Sector 1 (Ready Handover)</option>
              <option value="Sector 2 (Developing)">Sector 2 (Developing)</option>
              <option value="Sector 3 (Lake Zone)">Sector 3 (Lake Zone)</option>
              <option value="Highway Commercial Zone">Highway Commercial Zone</option>
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Plot Size</label>
            <select v-model="filterSize" class="custom-select">
              <option value="all">All Sizes (3 to 20 Katha)</option>
              <option value="3">3 Katha (2,160 sft)</option>
              <option value="5">5 Katha (3,600 sft)</option>
              <option value="10">10 Katha (7,200 sft)</option>
              <option value="20">20 Katha (14,400 sft)</option>
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Facing / Orientation</label>
            <select v-model="filterFacing" class="custom-select">
              <option value="all">All Facings</option>
              <option value="South">South Facing</option>
              <option value="Lakefront">Lakefront Facing</option>
              <option value="Corner">Corner Plot</option>
              <option value="North">North Facing</option>
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Reset Filter</label>
            <button @click="resetFilters" class="btn-outline" style="width: 100%; height: 44px; padding: 0;">
              ↺ Reset All Filters
            </button>
          </div>
        </div>
      </div>

      <!-- Plot Results Grid -->
      <div v-if="filteredLandPlots.length > 0" class="property-grid">
        <PlotCard
          v-for="plot in filteredLandPlots"
          :key="plot.id"
          :plot="plot"
          @book-plot="$emit('book-plot', $event)"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="glass-panel" style="padding: 4rem; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-size: 1.5rem; color: var(--gold-light); margin-bottom: 0.5rem;">No Plots Match Selected Criteria</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
          Try adjusting your sector or size filters to see more available plots.
        </p>
        <button @click="resetFilters" class="btn-gold">View All Land Plots</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePlotInventory } from '~/composables/usePlotInventory'
import PlotCard from '~/components/common/PlotCard.vue'

defineEmits(['book-plot'])
const { plots } = usePlotInventory()

const filterSector = ref('all')
const filterSize = ref('all')
const filterFacing = ref('all')

const landPlots = computed(() => {
  return plots.value.filter(p => p.category === 'residential-land' || p.category === 'commercial-land')
})

const filteredLandPlots = computed(() => {
  return landPlots.value.filter(plot => {
    if (filterSector.value !== 'all' && plot.sector !== filterSector.value) return false
    if (filterSize.value !== 'all' && plot.sizeKatha !== Number(filterSize.value)) return false
    if (filterFacing.value !== 'all' && plot.facing !== filterFacing.value) return false
    return true
  })
})

const resetFilters = () => {
  filterSector.value = 'all'
  filterSize.value = 'all'
  filterFacing.value = 'all'
}

useHead({
  title: 'Land & Plots For Sale | Gangchil Real Estate Dhaka',
  meta: [
    { name: 'description', content: 'Explore 3, 5, 10, and 20 Katha residential and commercial land plots with 60-month easy installment facilities on Dhaka-Savar Highway.' }
  ]
})
</script>
