<template>
  <div style="padding: 3rem 0 6rem 0;">
    <div class="gangchil-container">
      <div style="margin-bottom: 3rem; text-align: center;">
        <div class="section-badge">100% Legal Transparency</div>
        <h1 class="section-title">Deed Registration & Khatian Verification Hub</h1>
        <p class="section-subtitle" style="margin: 0 auto;">
          We take absolute responsibility for 100% legal clarity. Review our 5-stage legal verification process before investing a single Taka.
        </p>
      </div>

      <!-- 5-Stage Legal Verification Process -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem;">
          <div style="width: 44px; height: 44px; border-radius: var(--radius-full); background: var(--gold-gradient); color: #000; font-weight: 800; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            1
          </div>
          <h3 style="font-size: 1.25rem; color: var(--gold-light); margin-bottom: 0.5rem;">C.S, S.A & R.S Chain Records</h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
            Flawless historical ownership chain tracking dating back 70+ years to avoid any hereditary or vested property disputes.
          </p>
        </div>

        <div class="glass-panel" style="padding: 2rem;">
          <div style="width: 44px; height: 44px; border-radius: var(--radius-full); background: var(--emerald-gradient); color: #fff; font-weight: 800; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            2
          </div>
          <h3 style="font-size: 1.25rem; color: var(--emerald-light); margin-bottom: 0.5rem;">Latest B.S / City Survey Record</h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
            Updated Bangladesh Survey (B.S) Khatian recorded in the name of Gangchil / Goldeneye Developers Ltd. with up-to-date Land Tax receipts.
          </p>
        </div>

        <div class="glass-panel" style="padding: 2rem;">
          <div style="width: 44px; height: 44px; border-radius: var(--radius-full); background: #38bdf8; color: #000; font-weight: 800; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            3
          </div>
          <h3 style="font-size: 1.25rem; color: #38bdf8; margin-bottom: 0.5rem;">Mutation & DCR Clearance</h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
            Separate mutation porcha and Duplicate Carbon Receipt (DCR) created for every individual sector and demarcated plot.
          </p>
        </div>

        <div class="glass-panel" style="padding: 2rem;">
          <div style="width: 44px; height: 44px; border-radius: var(--radius-full); background: #f59e0b; color: #000; font-weight: 800; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
            4
          </div>
          <h3 style="font-size: 1.25rem; color: #f59e0b; margin-bottom: 0.5rem;">Sub-Registry Deed Handover</h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
            Registered Sale Deed (Kabala) executed directly at the Government Sub-Registry Office with digital biometric registration.
          </p>
        </div>
      </div>

      <!-- Legal Inspection Request Box -->
      <div class="glass-panel" style="padding: 3rem; text-align: center; border-color: var(--border-gold); background: radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(8,20,16,0.9) 70%);">
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--gold-light); margin-bottom: 1rem;">
          Would You Like Your Legal Advocate To Inspect Our Deeds?
        </h3>
        <p style="font-size: 1rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto 2rem auto;">
          We openly invite your lawyer or property advisor to visit our Corporate Head Office to inspect all original Bia-Deeds, Khatians, and government clearance documents.
        </p>
        <button @click="$emit('open-site-visit')" class="btn-gold" style="padding: 0.9rem 2.2rem; font-size: 1rem;">
          Request Legal Document Inspection Session
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['open-site-visit'])

useHead({
  title: 'Legal Compliance & Deed Verification | Gangchil Real Estate',
  meta: [
    { name: 'description', content: 'Explore complete legal documentation process, CS, SA, RS, BS Khatian verification, and Government Sub-Registry deed transfer guarantees.' }
  ]
})
</script>
