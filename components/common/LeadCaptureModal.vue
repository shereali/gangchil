<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-card">
      <button @click="closeModal" class="modal-close-btn" aria-label="Close Modal">✕</button>

      <!-- Success State -->
      <div v-if="submitSuccess" style="text-align: center; padding: 1.5rem 0;">
        <div style="font-size: 3.5rem; margin-bottom: 1rem;">🎉</div>
        <h3 style="font-family: var(--font-serif); font-size: 1.7rem; color: var(--gold-light); margin-bottom: 0.5rem;">
          Request Received Successfully!
        </h3>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.6;">
          Thank you, <strong>{{ formData.name }}</strong>. Our Senior Property Consultant will call you at <strong>{{ formData.phone }}</strong> within 15 minutes to confirm your VIP arrangements.
        </p>
        <button @click="closeModal" class="btn-gold" style="width: 100%;">
          Close Window
        </button>
      </div>

      <!-- Form State -->
      <div v-else>
        <!-- Modal Headers -->
        <div style="margin-bottom: 1.75rem;">
          <div v-if="modalType === 'site-visit'">
            <div class="section-badge" style="font-size: 0.75rem;">🚗 Complimentary Service</div>
            <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--gold-light); margin-bottom: 0.35rem;">
              Book Free AC Chauffeur Site Visit
            </h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">
              We will pick you and your family up from anywhere in Dhaka in our luxury AC vehicle for a private on-site township tour.
            </p>
          </div>

          <div v-else-if="modalType === 'brochure'">
            <div class="section-badge" style="font-size: 0.75rem;">📥 Instant PDF Access</div>
            <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--gold-light); margin-bottom: 0.35rem;">
              Download Masterplan & Price Sheet
            </h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">
              Get full HD Sector maps, Katha dimensions, payment schedules, and legal clearance copies sent directly to your WhatsApp/Email.
            </p>
          </div>

          <div v-else>
            <div class="section-badge" style="font-size: 0.75rem;">🔒 Priority Plot Reservation</div>
            <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--gold-light); margin-bottom: 0.35rem;">
              Reserve {{ selectedPlot?.title || 'Selected Plot' }}
            </h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">
              Lock in your promotional rate and schedule an immediate plot visit and deed verification.
            </p>
          </div>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label class="form-label">Full Name *</label>
            <input
              type="text"
              v-model="formData.name"
              required
              class="custom-input"
              placeholder="e.g. Dr. Rafiqul Islam"
            />
          </div>

          <div class="form-group">
            <label class="form-label">Phone / WhatsApp Number *</label>
            <input
              type="tel"
              v-model="formData.phone"
              required
              class="custom-input"
              placeholder="e.g. +880 1712-345678"
            />
          </div>

          <div class="form-group">
            <label class="form-label">Email Address (Optional)</label>
            <input
              type="email"
              v-model="formData.email"
              class="custom-input"
              placeholder="e.g. rafiq@gmail.com"
            />
          </div>

          <!-- Extra Fields for Site Visit -->
          <div v-if="modalType === 'site-visit'" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">Preferred Date</label>
              <input
                type="date"
                v-model="formData.preferredDate"
                class="custom-input"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Pickup Area</label>
              <input
                type="text"
                v-model="formData.pickupLocation"
                class="custom-input"
                placeholder="e.g. Uttara / Dhanmondi"
              />
            </div>
          </div>

          <div v-if="submitError" style="color: #f87171; font-size: 0.85rem; margin-bottom: 1rem;">
            ⚠️ {{ submitError }}
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="btn-gold"
            style="width: 100%; padding: 0.95rem; font-size: 1rem; margin-top: 0.5rem;"
          >
            <span v-if="isSubmitting">Processing... ⏳</span>
            <span v-else-if="modalType === 'site-visit'">🚗 Confirm Free VIP Pickup Tour</span>
            <span v-else-if="modalType === 'brochure'">📥 Download PDF Brochure Now</span>
            <span v-else>🔒 Confirm Plot Inquiry & Lock Price</span>
          </button>
        </form>

        <div style="text-align: center; margin-top: 1rem; font-size: 0.78rem; color: var(--text-muted);">
          🔒 Your contact information is strictly confidential and protected.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps<{
  isOpen: boolean
  modalType: 'site-visit' | 'brochure' | 'book-plot'
  selectedPlot?: any
  isSubmitting?: boolean
  submitSuccess?: boolean
  submitError?: string | null
}>()

const emit = defineEmits(['close', 'submit-lead'])

const formData = reactive({
  name: '',
  phone: '',
  email: '',
  preferredDate: '',
  pickupLocation: ''
})

const closeModal = () => {
  emit('close')
}

const handleSubmit = () => {
  emit('submit-lead', {
    ...formData,
    interestType: props.modalType,
    plotId: props.selectedPlot?.id || 'General'
  })
}
</script>
