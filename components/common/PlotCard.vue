<template>
  <div class="property-card">
    <div class="property-img-wrap">
      <img :src="plot.image" :alt="plot.title" class="property-img" loading="lazy" />
      <span class="property-badge" :class="plot.status === 'available' ? 'badge-ready' : 'badge-upcoming'">
        {{ plot.status === 'available' ? 'Available Ready' : 'Reserved' }}
      </span>
      <div style="position: absolute; bottom: 0.75rem; right: 0.75rem; background: rgba(0,0,0,0.75); backdrop-filter: blur(8px); padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); font-size: 0.75rem; color: var(--gold-light); font-weight: 600;">
        {{ plot.facing }} Facing
      </div>
    </div>

    <div class="property-body">
      <div>
        <div style="font-size: 0.8rem; color: var(--emerald-light); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">
          {{ plot.sector }}
        </div>
        <h3 style="font-size: 1.2rem; font-family: var(--font-serif); margin-bottom: 0.5rem; color: var(--text-primary); line-height: 1.35;">
          {{ plot.title }}
        </h3>

        <!-- Specs row with flex wrap -->
        <div class="property-specs">
          <div>📏 <strong>{{ plot.sizeKatha }} Katha</strong> ({{ plot.sizeSqFt }} sft)</div>
          <div>🛣️ {{ plot.roadWidth }}</div>
        </div>

        <!-- Features list -->
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 1.2rem;">
          <li v-for="(feat, idx) in plot.features" :key="idx" style="display: flex; align-items: flex-start; gap: 0.4rem;">
            <span style="color: var(--emerald-light);">✓</span>
            <span>{{ feat }}</span>
          </li>
        </ul>
      </div>

      <div>
        <div class="property-price-row">
          <div>
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em;">Total Plot Value</div>
            <div class="property-price">BDT {{ plot.totalPrice }} Lakhs</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em;">60M Monthly EMI</div>
            <div style="font-size: 1rem; font-weight: 700; color: var(--emerald-light);">
              BDT {{ (plot.monthlyEMI || 0).toLocaleString() }}/mo
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-top: 1.25rem;">
          <button @click="$emit('book-plot', plot)" class="btn-gold" style="padding: 0.65rem 0.75rem; font-size: 0.85rem; width: 100%; text-align: center;">
            Book Plot
          </button>
          <a :href="`https://wa.me/8801324736400?text=Hi%20Gangchil,%20I%20am%20interested%20in%20${encodeURIComponent(plot.title)}%20(${plot.id})`" target="_blank" class="btn-outline" style="padding: 0.65rem 0.75rem; font-size: 0.85rem; width: 100%; text-align: center; border-color: rgba(37, 211, 102, 0.4); color: #25d366;">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PlotItem } from '~/composables/usePlotInventory'

defineProps<{
  plot: PlotItem
}>()

defineEmits(['book-plot'])
</script>
