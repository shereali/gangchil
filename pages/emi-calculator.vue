<template>
  <div style="padding: 3rem 0 6rem 0;">
    <div class="gangchil-container">
      <div style="margin-bottom: 2rem; text-align: center;">
        <div class="section-badge">Land Financing Suite</div>
        <h1 class="section-title">Plot Installment & Land Conversion Calculator</h1>
        <p class="section-subtitle" style="margin: 0 auto;">
          Plan your land purchase with 100% transparent figures. No hidden documentation fees, no fluctuating bank interest.
        </p>
      </div>

      <LandCalculator
        @request-plan="$emit('request-plan', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LandCalculator from '~/components/home/LandCalculator.vue'

defineEmits(['request-plan'])

useHead({
  title: 'Land EMI & Installment Calculator | Gangchil Real Estate',
  meta: [
    { name: 'description', content: 'Calculate Katha to Decimal land units and customized 12 to 72 months installment plans for residential plots.' }
  ]
})
</script>
