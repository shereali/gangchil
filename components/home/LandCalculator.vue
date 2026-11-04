<template>
  <section class="calc-section">
    <div class="gangchil-container">
      <div style="text-align: center; margin-bottom: 3.5rem;">
        <div class="section-badge">Financial & Sizing Tools</div>
        <h2 class="section-title">Smart Land Converter & Installment Planner</h2>
        <p class="section-subtitle" style="margin: 0 auto;">
          Calculate exact plot sizes in Katha, Decimal, and Sq.ft, or generate a custom zero-hidden-cost monthly installment schedule.
        </p>
      </div>

      <div class="calc-grid">
        <!-- Tool 1: Unit Converter -->
        <div class="calc-box">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
            <div style="font-size: 1.5rem;">📐</div>
            <div>
              <h3 style="font-size: 1.35rem; color: var(--gold-light);">Land Measurement Converter</h3>
              <div style="font-size: 0.85rem; color: var(--text-muted);">Standard Bangladeshi Land Units</div>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Input Size</label>
            <div style="display: grid; grid-template-columns: 1fr 140px; gap: 0.75rem;">
              <input
                type="number"
                v-model.number="inputUnitVal"
                min="0.1"
                step="0.1"
                class="custom-input"
                placeholder="Enter value..."
              />
              <select v-model="selectedFromUnit" class="custom-select">
                <option value="katha">Katha</option>
                <option value="decimal">Decimal (Shotok)</option>
                <option value="sqft">Sq. Feet</option>
                <option value="bigha">Bigha</option>
              </select>
            </div>
          </div>

          <!-- Live Conversion Results Matrix -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
            <div style="background: rgba(0, 0, 0, 0.4); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; text-align: center;">
              <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Katha</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--gold-light);">
                {{ convertedOutput.katha }} <span style="font-size: 0.85rem; font-weight: 400;">Katha</span>
              </div>
            </div>

            <div style="background: rgba(0, 0, 0, 0.4); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; text-align: center;">
              <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Decimal (Shotok)</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--emerald-light);">
                {{ convertedOutput.decimal }} <span style="font-size: 0.85rem; font-weight: 400;">Dec</span>
              </div>
            </div>

            <div style="background: rgba(0, 0, 0, 0.4); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; text-align: center;">
              <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Square Feet</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary);">
                {{ (convertedOutput?.sqft || 0).toLocaleString() }} <span style="font-size: 0.85rem; font-weight: 400;">Sft</span>
              </div>
            </div>

            <div style="background: rgba(0, 0, 0, 0.4); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; text-align: center;">
              <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Bigha</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-primary);">
                {{ convertedOutput.bigha }} <span style="font-size: 0.85rem; font-weight: 400;">Bigha</span>
              </div>
            </div>
          </div>

          <div style="margin-top: 1.5rem; font-size: 0.82rem; color: var(--text-muted); text-align: center;">
            💡 1 Katha = 720 Sq.Ft = 1.65 Decimal • 20 Katha = 1 Bigha
          </div>
        </div>

        <!-- Tool 2: Installment / EMI Calculator -->
        <div class="calc-box">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
            <div style="font-size: 1.5rem;">💳</div>
            <div>
              <h3 style="font-size: 1.35rem; color: var(--emerald-light);">In-House EMI & Installment Calculator</h3>
              <div style="font-size: 0.85rem; color: var(--text-muted);">Flexible 12 to 72 Months Payment Facility</div>
            </div>
          </div>

          <!-- Total Plot Price Slider -->
          <div class="form-group">
            <div style="display: flex; justify-content: space-between; font-size: 0.88rem;">
              <span class="form-label">Total Plot Value (Lakhs BDT)</span>
              <span style="font-weight: 700; color: var(--gold-light);">{{ emiPriceLakhs }} Lakhs BDT</span>
            </div>
            <input
              type="range"
              v-model.number="emiPriceLakhs"
              min="20"
              max="500"
              step="5"
              class="range-slider"
            />
          </div>

          <!-- Down Payment Slider -->
          <div class="form-group">
            <div style="display: flex; justify-content: space-between; font-size: 0.88rem;">
              <span class="form-label">Down Payment (%)</span>
              <span style="font-weight: 700; color: var(--emerald-light);">{{ downPayPercent }}% (BDT {{ (emiPriceLakhs * downPayPercent / 100).toFixed(1) }} Lakhs)</span>
            </div>
            <input
              type="range"
              v-model.number="downPayPercent"
              min="10"
              max="60"
              step="5"
              class="range-slider"
            />
          </div>

          <!-- Tenure Buttons -->
          <div class="form-group">
            <label class="form-label">Installment Tenure (Months)</label>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;">
              <button
                v-for="t in [24, 36, 48, 60]"
                :key="t"
                @click="tenureMonths = t"
                type="button"
                :class="tenureMonths === t ? 'btn-gold' : 'btn-outline'"
                style="padding: 0.5rem 0; font-size: 0.85rem;"
              >
                {{ t }} M
              </button>
            </div>
          </div>

          <!-- Result Box -->
          <div class="emi-result-card">
            <div style="font-size: 0.82rem; color: var(--text-muted); text-transform: uppercase;">Estimated Monthly Installment</div>
            <div class="emi-amount">
              BDT {{ (calculatedEMI?.monthlyEMI || 0).toLocaleString() }} <span style="font-size: 1rem; font-weight: 400; color: var(--text-secondary);">/ month</span>
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary);">
              Down Payment: BDT {{ (calculatedEMI?.downPaymentBDT || 0).toLocaleString() }} • Total Principal: BDT {{ (calculatedEMI?.principalBDT || 0).toLocaleString() }}
            </div>
          </div>

          <button @click="$emit('request-plan', { price: emiPriceLakhs, downPayment: calculatedEMI?.downPaymentBDT || 0, emi: calculatedEMI?.monthlyEMI || 0, tenure: tenureMonths })" class="btn-gold" style="width: 100%; margin-top: 1.25rem;">
            Lock This Installment Plan & Consult Advisor
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePlotInventory } from '~/composables/usePlotInventory'

defineEmits(['request-plan'])
const { convertUnits, calculateEMI } = usePlotInventory()

// Unit Converter State
const inputUnitVal = ref(5)
const selectedFromUnit = ref<'katha' | 'decimal' | 'sqft' | 'bigha'>('katha')

const convertedOutput = computed(() => {
  return convertUnits(inputUnitVal.value || 0, selectedFromUnit.value)
})

// EMI State
const emiPriceLakhs = ref(60)
const downPayPercent = ref(20)
const tenureMonths = ref(60)

const calculatedEMI = computed(() => {
  return calculateEMI(emiPriceLakhs.value, downPayPercent.value, tenureMonths.value, 0) // In-house interest-free structure
})
</script>
