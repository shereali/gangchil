<template>
  <div>
    <!-- Hero Banner with Quick Plot Finder -->
    <HeroBanner
      @open-site-visit="$emit('open-site-visit')"
      @open-brochure="$emit('open-brochure')"
    />

    <!-- Live Stats Ticker -->
    <StatsTicker />

    <!-- 3 Core Categories (Land, Flats, Hotel) -->
    <CategoryCards />

    <!-- Interactive Masterplan Visualizer -->
    <MasterPlanViewer
      @book-sector="$emit('book-sector', $event)"
      @open-site-visit="$emit('open-site-visit')"
    />

    <!-- Land Unit & EMI Calculator -->
    <LandCalculator
      @request-plan="$emit('request-plan', $event)"
    />

    <!-- Filterable Featured Properties & Plots -->
    <FeaturedListings
      @book-plot="$emit('book-plot', $event)"
    />

    <!-- Why Choose Us / Trust & Legal Badges -->
    <WhyChooseUs />

    <!-- Virtual Perspective & Highway Connectivity -->
    <VirtualTour />

    <!-- Expat & NRB Gateway -->
    <ExpatHub
      @open-site-visit="$emit('open-site-visit')"
    />

    <!-- Customer Testimonials -->
    <Testimonials />

    <!-- Final Call to Action Strip -->
    <section style="padding: 6rem 0; background: radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(8,20,16,0.95) 70%); text-align: center; border-top: 1px solid var(--border-gold);">
      <div class="gangchil-container">
        <div class="section-badge" style="margin-bottom: 1.5rem;">Limited Ready Plots Available</div>
        <h2 style="font-family: var(--font-serif); font-size: clamp(2.2rem, 4vw, 3.5rem); color: var(--gold-light); margin-bottom: 1rem;">
          Start Your Family's Land Journey Today
        </h2>
        <p style="font-size: 1.15rem; color: var(--text-secondary); max-width: 680px; margin: 0 auto 2.5rem auto;">
          Join over 1,250 happy landowners who have already secured their plots in Northern Dhaka's premier master-planned community.
        </p>
        <div style="display: flex; justify-content: center; gap: 1.25rem; flex-wrap: wrap;">
          <button @click="$emit('open-site-visit')" class="btn-gold" style="padding: 1rem 2.25rem; font-size: 1.05rem;">
            🚗 Book Free AC Chauffeur Tour
          </button>
          <a href="tel:+8801324736400" class="btn-outline" style="padding: 1rem 2.25rem; font-size: 1.05rem;">
            📞 Call Hotline: +880 1324-736400
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '~/components/home/HeroBanner.vue'
import StatsTicker from '~/components/home/StatsTicker.vue'
import CategoryCards from '~/components/home/CategoryCards.vue'
import MasterPlanViewer from '~/components/home/MasterPlanViewer.vue'
import LandCalculator from '~/components/home/LandCalculator.vue'
import FeaturedListings from '~/components/home/FeaturedListings.vue'
import WhyChooseUs from '~/components/home/WhyChooseUs.vue'
import VirtualTour from '~/components/home/VirtualTour.vue'
import ExpatHub from '~/components/home/ExpatHub.vue'
import Testimonials from '~/components/home/Testimonials.vue'

defineEmits(['open-site-visit', 'open-brochure', 'book-plot', 'book-sector', 'request-plan'])

useHead({
  title: 'Gangchil Real Estate | 3, 5, 10 & 20 Katha Plots For Sale in Dhaka',
  meta: [
    { name: 'description', content: 'Discover residential & commercial land plots on Dhaka-Savar Highway with 60-month easy installment facility and 100% legal registration.' }
  ]
})
</script>
