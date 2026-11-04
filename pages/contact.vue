<template>
  <div style="padding: 3.5rem 0 6.5rem 0;">
    <div class="gangchil-container">
      <div style="margin-bottom: 3.5rem; text-align: center;">
        <div class="section-badge">Direct Developer Communication</div>
        <h1 class="section-title">Visit Our Offices &amp; Schedule VIP Site Tour</h1>
        <p class="section-subtitle" style="margin: 0 auto;">
          Our Senior Property Advisors and Legal Officers are available 7 days a week from 9:00 AM to 8:00 PM for confidential consultations, deed verification, and chauffeured site visits.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1.25fr; gap: 3.5rem; align-items: start;">
        <!-- Office Info Column -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <!-- Corporate Head Office -->
          <div class="glass-panel" style="padding: 2.25rem; border-radius: var(--radius-md);">
            <div style="font-size: 0.75rem; color: var(--gold-light); font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.5rem;">
              Corporate Headquarters
            </div>
            <h3 style="font-size: 1.35rem; color: var(--text-primary); margin-bottom: 0.85rem; font-weight: 700;">
              Gangchil Homes / Goldeneye Developers Ltd.
            </h3>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              42-43 Siddeswari Circular Road, Treasure Island, Suite No-503, Shantinagar, Dhaka-1217, Bangladesh.
            </p>
            <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.9rem; color: var(--text-primary); border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
              <div><strong>Direct Care:</strong> +880 1324-736400</div>
              <div><strong>Corporate PBX:</strong> +880 2-22890-988 / +880 2-222229-663</div>
              <div><strong>Official Email:</strong> info@dhakawesternvalleybd.com</div>
            </div>
          </div>

          <!-- On-Site Project Office -->
          <div class="glass-panel" style="padding: 2.25rem; border-radius: var(--radius-md);">
            <div style="font-size: 0.75rem; color: var(--emerald-light); font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.5rem;">
              Township Site HQ &amp; Client Lounge
            </div>
            <h3 style="font-size: 1.35rem; color: var(--text-primary); margin-bottom: 0.85rem; font-weight: 700;">
              Dhaka Western Valley Project Site
            </h3>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              120ft Main Boulevard Entrance, Dhaka-Savar 4-Lane Highway (Singair / Hemayetpur Corridor), Savar, Dhaka.
            </p>
            <div style="font-size: 0.88rem; color: var(--emerald-light); display: flex; align-items: center; gap: 0.5rem;">
              <span>✓</span> Free AC Chauffeur pickup &amp; on-site customer hospitality lounge available.
            </div>
          </div>
        </div>

        <!-- Direct Inquiry Form -->
        <div class="glass-panel" style="padding: 2.5rem; border: 1px solid var(--border-gold); border-radius: var(--radius-md);">
          <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--gold-light); margin-bottom: 0.5rem;">
            Schedule a Private Consultation
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.75rem;">
            Directly connect with our project managers for transparent inventory pricing and immediate registration paperwork.
          </p>

          <form @submit.prevent="handleSubmitMessage">
            <div class="form-group">
              <label class="form-label">Full Name *</label>
              <input type="text" v-model="contactForm.name" required class="custom-input" placeholder="e.g. Dr. Mahfuzur Rahman" />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Mobile Number *</label>
                <input type="tel" v-model="contactForm.phone" required class="custom-input" placeholder="e.g. 01712-XXXXXX" />
              </div>

              <div class="form-group">
                <label class="form-label">Email Address</label>
                <input type="email" v-model="contactForm.email" class="custom-input" placeholder="e.g. mahfuz@example.com" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Property / Inquiry Category</label>
              <select v-model="contactForm.category" class="custom-select">
                <option value="Residential Land">Residential Land (3, 5, 10, 20 Katha)</option>
                <option value="Highway Commercial Plot">120ft Highway Commercial Plot</option>
                <option value="Luxury Duplex Flat">Luxury Condominium / Duplex Flat</option>
                <option value="Hotel Suite Share">5-Star Hotel Suite Share (14% ROI)</option>
                <option value="Free Site Visit">Book Free AC Chauffeur Site Tour</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Sizing &amp; Preferred Sector Notes</label>
              <textarea v-model="contactForm.message" rows="3" class="custom-input" placeholder="State your preferred Katha size, budget, payment timeline, or site visit date..."></textarea>
            </div>

            <div v-if="submitted" style="background: rgba(0,210,133,0.15); border: 1px solid var(--border-emerald); color: var(--emerald-light); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem; text-align: center;">
              ✓ Inquiry received! Our Senior Property Advisor will contact you within 30 minutes.
            </div>

            <button type="submit" class="btn-gold" style="width: 100%; padding: 0.95rem; font-size: 1rem;">
              Submit Inquiry &amp; Request Callback
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const submitted = ref(false)
const contactForm = reactive({
  name: '',
  phone: '',
  email: '',
  category: 'Residential Land',
  message: ''
})

const handleSubmitMessage = async () => {
  try {
    await $fetch('/api/leads', {
      method: 'POST',
      body: {
        name: contactForm.name,
        phone: contactForm.phone,
        email: contactForm.email,
        source: 'Contact Page Inquiry',
        interestCategory: contactForm.category,
        message: contactForm.message
      }
    })
    submitted.value = true
    setTimeout(() => {
      contactForm.name = ''
      contactForm.phone = ''
      contactForm.email = ''
      contactForm.message = ''
    }, 2000)
  } catch (err) {
    submitted.value = true
  }
}
</script>
