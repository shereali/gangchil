<template>
  <div style="min-height: 100vh; display: flex; flex-direction: column;">
    <AppHeader @open-site-visit="openModal('site-visit')" />

    <main style="flex: 1;">
      <NuxtPage
        @open-site-visit="openModal('site-visit')"
        @open-brochure="openModal('brochure')"
        @book-plot="openModal('book-plot', $event)"
        @book-sector="openModal('book-plot', $event)"
        @request-plan="openModal('book-plot', $event)"
      />
    </main>

    <AppFooter />

    <FloatingActions />

    <LeadCaptureModal
      :is-open="isModalOpen"
      :modal-type="modalType"
      :selected-plot="selectedPlot"
      :is-submitting="isSubmitting"
      :submit-success="submitSuccess"
      :submit-error="submitError"
      @close="closeModal"
      @submit-lead="handleLeadSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import FloatingActions from '~/components/common/FloatingActions.vue'
import LeadCaptureModal from '~/components/common/LeadCaptureModal.vue'
import { useLeadCapture } from '~/composables/useLeadCapture'

const {
  isModalOpen,
  modalType,
  selectedPlot,
  isSubmitting,
  submitSuccess,
  submitError,
  openModal,
  closeModal,
  submitLead
} = useLeadCapture()

const handleLeadSubmit = async (payload: any) => {
  await submitLead(payload)
}
</script>
