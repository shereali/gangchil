<template>
  <section style="padding: 6rem 0;">
    <div class="gangchil-container">
      <div style="display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 3rem;">
        <div>
          <div class="section-badge">Featured Listings</div>
          <h2 class="section-title">Handpicked Ready Plots & Living Spaces</h2>
          <p class="section-subtitle">
            Demarcated plots with approved master layout, ready for immediate sub-registry transfer.
          </p>
        </div>

        <!-- Filter tabs -->
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button
            v-for="cat in categories"
            :key="cat.value"
            @click="activeCategory = cat.value"
            :class="activeCategory === cat.value ? 'btn-gold' : 'btn-outline'"
            style="padding: 0.5rem 1.1rem; font-size: 0.85rem;"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Property Grid -->
      <div class="property-grid">
        <PlotCard
          v-for="plot in filteredPlots"
          :key="plot.id"
          :plot="plot"
          @book-plot="$emit('book-plot', $event)"
        />
      </div>

      <div style="text-align: center; margin-top: 3.5rem;">
        <NuxtLink to="/plots" class="btn-outline" style="padding: 0.9rem 2.5rem; font-size: 1rem;">
          View All 1,200+ Available Plots →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePlotInventory } from '~/composables/usePlotInventory'
import PlotCard from '~/components/common/PlotCard.vue'

defineEmits(['book-plot'])
const { plots } = usePlotInventory()

const activeCategory = ref('all')

const categories = [
  { label: 'All Listings', value: 'all' },
  { label: 'Residential Land', value: 'residential-land' },
  { label: 'Commercial Land', value: 'commercial-land' },
  { label: 'Luxury Flats', value: 'flat' },
  { label: 'Hotel Suites', value: 'hotel-suite' }
]

const filteredPlots = computed(() => {
  if (activeCategory.value === 'all') return plots.value
  return plots.value.filter(p => p.category === activeCategory.value)
})
</script>
