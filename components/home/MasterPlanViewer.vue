<template>
  <section class="masterplan-section" style="background: #050d09; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
    <div class="gangchil-container">
      <div style="display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 2rem;">
        <div>
          <div class="section-badge">Interactive Visualizer</div>
          <h2 class="section-title">Explore The 3,500-Acre Masterplan</h2>
          <p class="section-subtitle">
            Click on any sector below to view plot availability, boundary roads, lake views, and live development status.
          </p>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; max-width: 100%;">
          <button
            v-for="sec in sectors"
            :key="sec.id"
            @click="selectedSector = sec"
            :class="selectedSector.id === sec.id ? 'btn-gold' : 'btn-outline'"
            style="padding: 0.5rem 0.85rem; font-size: 0.82rem; white-space: nowrap;"
          >
            {{ sec.name }}
          </button>
        </div>
      </div>

      <!-- Masterplan Interactive Map Grid -->
      <div class="masterplan-container">
        <!-- SVG Interactive Viewport -->
        <div class="map-viewport">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-size: 0.82rem; color: var(--text-muted); flex-wrap: wrap; gap: 0.5rem;">
            <span>⚡ Interactive Map (Click sectors to inspect)</span>
            <span style="color: var(--emerald-light);">● 4-Lane Highway Frontage</span>
          </div>

          <!-- SVG Visual Representation of Masterplan Sectors -->
          <svg class="map-svg-canvas" viewBox="0 0 900 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lakeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#0284c7" stop-opacity="0.7"/>
                <stop offset="100%" stop-color="#0369a1" stop-opacity="0.9"/>
              </linearGradient>
              <linearGradient id="sec1Grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#00d285" stop-opacity="0.6"/>
                <stop offset="100%" stop-color="#008755" stop-opacity="0.8"/>
              </linearGradient>
              <linearGradient id="sec2Grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#d4af37" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="#9a7b1b" stop-opacity="0.7"/>
              </linearGradient>
              <linearGradient id="sec3Grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="#0284c7" stop-opacity="0.7"/>
              </linearGradient>
              <linearGradient id="comGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.7"/>
                <stop offset="100%" stop-color="#b45309" stop-opacity="0.9"/>
              </linearGradient>
            </defs>

            <!-- Base Grid Background -->
            <rect width="900" height="500" fill="#081410" rx="12"/>

            <!-- Highway Strip (Dhaka-Savar 4 Lane Road) -->
            <path d="M 0 420 L 900 420" stroke="#f59e0b" stroke-width="24" stroke-dasharray="16 8"/>
            <text x="350" y="426" fill="#000" font-size="11" font-weight="900" letter-spacing="2">DHAKA-SAVAR 4-LANE HIGHWAY (120 FT)</text>

            <!-- Natural Central Lake -->
            <path d="M 380 80 Q 480 180 430 320 Q 360 250 320 180 Z" fill="url(#lakeGrad)" stroke="#38bdf8" stroke-width="2"/>
            <text x="350" y="210" fill="#fff" font-size="12" font-weight="bold" transform="rotate(-30 350 210)">Gangchil Central Lake &amp; Eco-Walkway</text>

            <!-- Sector 1 (Ready Handover) -->
            <polygon
              points="40,60 300,60 300,380 40,380"
              :fill="selectedSector.id === 'sec-1' ? 'url(#sec1Grad)' : '#0f3325'"
              :stroke="selectedSector.id === 'sec-1' ? '#00d285' : '#008755'"
              class="sector-polygon"
              :class="{ active: selectedSector.id === 'sec-1' }"
              @click="selectedSector = sectors[0]"
            />
            <text x="110" y="190" fill="#fff" font-size="16" font-weight="bold">SECTOR 1</text>
            <text x="90" y="215" fill="#00d285" font-size="12">100% Ready Handover</text>
            <text x="80" y="235" fill="#a9beba" font-size="11">3 &amp; 5 Katha Plots</text>

            <!-- Sector 2 (Active Development) -->
            <polygon
              points="520,60 860,60 860,240 520,240"
              :fill="selectedSector.id === 'sec-2' ? 'url(#sec2Grad)' : '#232918'"
              :stroke="selectedSector.id === 'sec-2' ? '#d4af37' : '#9a7b1b'"
              class="sector-polygon"
              :class="{ active: selectedSector.id === 'sec-2' }"
              @click="selectedSector = sectors[1]"
            />
            <text x="640" y="135" fill="#fff" font-size="16" font-weight="bold">SECTOR 2</text>
            <text x="615" y="160" fill="#f7e7a9" font-size="12">Developing Phase 2</text>
            <text x="610" y="180" fill="#a9beba" font-size="11">5 &amp; 10 Katha Plots</text>

            <!-- Sector 3 (Lakefront VIP Zone) -->
            <polygon
              points="520,260 860,260 860,380 520,380"
              :fill="selectedSector.id === 'sec-3' ? 'url(#sec3Grad)' : '#102738'"
              :stroke="selectedSector.id === 'sec-3' ? '#38bdf8' : '#0284c7'"
              class="sector-polygon"
              :class="{ active: selectedSector.id === 'sec-3' }"
              @click="selectedSector = sectors[2]"
            />
            <text x="630" y="310" fill="#fff" font-size="16" font-weight="bold">SECTOR 3 (VIP LAKE)</text>
            <text x="615" y="335" fill="#38bdf8" font-size="12">Lakefront Premium</text>
            <text x="610" y="355" fill="#a9beba" font-size="11">10 &amp; 20 Katha Duplex Plots</text>

            <!-- Highway Commercial Zone Strip -->
            <polygon
              points="40,390 860,390 860,410 40,410"
              :fill="selectedSector.id === 'sec-4' ? 'url(#comGrad)' : '#332110'"
              :stroke="selectedSector.id === 'sec-4' ? '#f59e0b' : '#b45309'"
              class="sector-polygon"
              :class="{ active: selectedSector.id === 'sec-4' }"
              @click="selectedSector = sectors[3]"
            />
          </svg>
        </div>

        <!-- Sidebar Inspector for Selected Sector -->
        <div class="masterplan-sidebar">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <span class="section-badge" style="margin: 0;">{{ selectedSector.status }}</span>
              <span style="font-size: 0.85rem; color: var(--gold-light); font-weight: 700;">{{ selectedSector.totalPlots }} Plots</span>
            </div>

            <h3 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 0.5rem;">
              {{ selectedSector.name }}
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
              {{ selectedSector.description }}
            </p>

            <div style="background: var(--bg-surface-elevated); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">KEY HIGHLIGHTS:</div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.88rem; color: var(--text-primary);">
                <li v-for="(feat, idx) in selectedSector.highlights" :key="idx">
                  ✓ {{ feat }}
                </li>
              </ul>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem;">Starting Price:</div>
              <div style="font-family: var(--font-serif); font-size: 1.6rem; font-weight: 800; color: var(--gold-light);">
                BDT {{ selectedSector.startPrice }} Lakhs / Katha
              </div>
            </div>
          </div>

          <div>
            <button @click="$emit('book-sector', selectedSector)" class="btn-gold" style="width: 100%; margin-bottom: 0.75rem;">
              Request Sector Availability &amp; Quote
            </button>
            <button @click="$emit('open-site-visit')" class="btn-outline" style="width: 100%;">
              Schedule Sector On-Site Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineEmits(['book-sector', 'open-site-visit'])

const sectors = ref([
  {
    id: 'sec-1',
    name: 'Sector 1 (Ready Handover)',
    status: 'Ready to Build',
    totalPlots: 320,
    startPrice: '16.5',
    description: 'Fully developed residential sector with paved 40 & 60 ft roads, electrical grid, drainage network, and demarcated plot boundaries.',
    highlights: ['Demarcated 3 & 5 Katha Plots', 'Instant Sub-Registry Transfer', 'Central Mosque & Park Ready', 'Street Lighting Active']
  },
  {
    id: 'sec-2',
    name: 'Sector 2 (Developing)',
    status: 'Development 75%',
    totalPlots: 450,
    startPrice: '15.0',
    description: 'High-growth sector featuring scenic green tree-lined avenues, proposed community medical clinic, and English medium school campus.',
    highlights: ['5 & 10 Katha Family Plots', '60 Months In-House Installment', 'Connecting to 80ft Boulevard', 'High Capital Growth']
  },
  {
    id: 'sec-3',
    name: 'Sector 3 (Lakefront VIP)',
    status: 'Lakeview Estate',
    totalPlots: 180,
    startPrice: '21.0',
    description: 'Ultra-exclusive residential enclave facing the Gangchil Natural Lake. Designed for bespoke luxury duplexes and triplex villas.',
    highlights: ['10 & 20 Katha Large Plots', 'Direct Lake Promenade Access', 'Private Security Gated Area', 'Boating & Club House Access']
  },
  {
    id: 'sec-4',
    name: 'Highway Commercial Strip',
    status: 'High ROI Commercial',
    totalPlots: 65,
    startPrice: '32.0',
    description: 'Direct frontage on the Dhaka-Savar 4-Lane Highway (120 ft). Approved for corporate offices, shopping malls, banks, and healthcare facilities.',
    highlights: ['120ft Four-Lane Highway Frontage', 'Approved for High-Rise 15-Story', 'Heavy Footfall & Fast Liquidity', 'Commercial Utility Connections']
  }
])

const selectedSector = ref(sectors.value[0])
</script>
