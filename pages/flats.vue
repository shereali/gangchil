<template>
  <div style="padding: 3rem 0 6rem 0;">
    <div class="gangchil-container">
      <div style="margin-bottom: 3rem;">
        <div class="section-badge">Architectural Living</div>
        <h1 class="section-title">Luxury Flats & Duplex Condominiums</h1>
        <p class="section-subtitle">
          Experience ultra-modern residential condominiums with rooftop infinity pools, imported fittings, smart security, and 2 designated car parking spaces.
        </p>
      </div>

      <div class="property-grid">
        <PlotCard
          v-for="flat in flatList"
          :key="flat.id"
          :plot="flat"
          @book-plot="$emit('book-plot', $event)"
        />
      </div>

      <!-- Feature Highlight Row -->
      <div class="glass-panel" style="margin-top: 4rem; padding: 3rem; background: radial-gradient(circle, rgba(0,210,133,0.12) 0%, rgba(8,20,16,0.9) 70%);">
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--emerald-light); margin-bottom: 1rem; text-align: center;">
          World-Class Flat Amenities Included
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; margin-top: 2rem;">
          <div style="text-align: center;">
            <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🏊</div>
            <h4 style="color: var(--text-primary); margin-bottom: 0.25rem;">Rooftop Infinity Pool</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">Panoramic sunset view with lounge deck</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🏋️</div>
            <h4 style="color: var(--text-primary); margin-bottom: 0.25rem;">Equipped Fitness Gym</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">Separate male & female workout zones</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🛡️</div>
            <h4 style="color: var(--text-primary); margin-bottom: 0.25rem;">24/7 Smart Security</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">CCTV coverage, biometric access & guard patrol</p>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">⚡</div>
            <h4 style="color: var(--text-primary); margin-bottom: 0.25rem;">100% Generator Backup</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">Full residential power backup including ACs</p>
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

const flatList = computed(() => {
  return plots.value.filter(p => p.category === 'flat')
})

useHead({
  title: 'Luxury Flats & Condominiums | Gangchil Real Estate',
  meta: [
    { name: 'description', content: 'Luxury 3 and 4 bedroom apartments and duplex condominiums with rooftop amenities and flexible payment plans.' }
  ]
})
</script>
