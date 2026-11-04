import { ref } from 'vue'

export interface LeadPayload {
  name: string
  phone: string
  email?: string
  interestType: 'land' | 'flat' | 'hotel' | 'brochure' | 'site-visit'
  plotId?: string
  preferredDate?: string
  pickupLocation?: string
  notes?: string
}

export const useLeadCapture = () => {
  const isModalOpen = ref(false)
  const modalType = ref<'site-visit' | 'brochure' | 'book-plot'>('site-visit')
  const selectedPlot = ref<any>(null)
  const isSubmitting = ref(false)
  const submitSuccess = ref(false)
  const submitError = ref<string | null>(null)

  const openModal = (type: 'site-visit' | 'brochure' | 'book-plot', plotData?: any) => {
    modalType.value = type
    selectedPlot.value = plotData || null
    isModalOpen.value = true
    submitSuccess.value = false
    submitError.value = null
  }

  const closeModal = () => {
    isModalOpen.value = false
  }

  const submitLead = async (payload: LeadPayload) => {
    isSubmitting.value = true
    submitError.value = null

    try {
      // Send to Nuxt server API endpoint (which communicates with Laravel 13 backend)
      const response = await $fetch('/api/leads', {
        method: 'POST',
        body: payload
      })

      submitSuccess.value = true
      return response
    } catch (err: any) {
      submitError.value = err.message || 'Failed to submit booking. Please call our hotline directly.'
      throw err
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    isModalOpen,
    modalType,
    selectedPlot,
    isSubmitting,
    submitSuccess,
    submitError,
    openModal,
    closeModal,
    submitLead
  }
}
