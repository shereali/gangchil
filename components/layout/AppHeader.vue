<template>
  <header class="app-header">
    <div class="gangchil-container">
      <div class="nav-inner">
        <!-- Brand Logo (Pure Vector Luxury Gold & Emerald SVG) -->
        <NuxtLink to="/" class="brand-logo" aria-label="Gangchil Homes Home">
          <img
            src="/images/logo/gangchil_luxury_logo.svg"
            alt="Gangchil Homes"
            class="header-logo-img"
          />
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <ul class="nav-links">
          <li>
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          </li>

          <!-- Properties Dropdown -->
          <li class="nav-dropdown-wrapper">
            <button class="nav-link" type="button" aria-haspopup="true">
              Properties <span style="font-size: 0.75rem; transition: transform 0.2s;">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <NuxtLink to="/plots" class="dropdown-item">
                <div class="dropdown-item-icon">🌿</div>
                <div>
                  <div class="dropdown-item-title">Land &amp; Plots</div>
                  <div class="dropdown-item-desc">3, 5, 10, 20 Katha Ready &amp; Developing</div>
                </div>
              </NuxtLink>

              <NuxtLink to="/flats" class="dropdown-item">
                <div class="dropdown-item-icon">🏢</div>
                <div>
                  <div class="dropdown-item-title">Luxury Flats</div>
                  <div class="dropdown-item-desc">Duplex condominiums &amp; sky penthouses</div>
                </div>
              </NuxtLink>

              <NuxtLink to="/hotel-suites" class="dropdown-item">
                <div class="dropdown-item-icon">🏨</div>
                <div>
                  <div class="dropdown-item-title">Hotel Suites</div>
                  <div class="dropdown-item-desc">5-Star ownership with 14% annual ROI</div>
                </div>
              </NuxtLink>
            </div>
          </li>

          <!-- Township & Tools Dropdown -->
          <li class="nav-dropdown-wrapper">
            <button class="nav-link" type="button" aria-haspopup="true">
              Township &amp; Tools <span style="font-size: 0.75rem; transition: transform 0.2s;">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <NuxtLink to="/master-plan" class="dropdown-item">
                <div class="dropdown-item-icon">🗺️</div>
                <div>
                  <div class="dropdown-item-title">Interactive Masterplan</div>
                  <div class="dropdown-item-desc">3,500-Acre sector map &amp; road network</div>
                </div>
              </NuxtLink>

              <NuxtLink to="/emi-calculator" class="dropdown-item">
                <div class="dropdown-item-icon">📐</div>
                <div>
                  <div class="dropdown-item-title">Land &amp; EMI Calculator</div>
                  <div class="dropdown-item-desc">Katha ⇄ Decimal and 60M installment schedule</div>
                </div>
              </NuxtLink>

              <NuxtLink to="/legal-compliance" class="dropdown-item">
                <div class="dropdown-item-icon">⚖️</div>
                <div>
                  <div class="dropdown-item-title">Legal &amp; Deed Hub</div>
                  <div class="dropdown-item-desc">CS, SA, RS, BS Khatian verification &amp; mutation</div>
                </div>
              </NuxtLink>
            </div>
          </li>

          <!-- Expat / NRB Gateway -->
          <li>
            <NuxtLink to="/legal-compliance" class="nav-link">
              <span style="color: var(--emerald-light);">🌍</span> Expat Desk
            </NuxtLink>
          </li>

          <!-- Contact Us -->
          <li>
            <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          </li>
        </ul>

        <!-- Action CTAs -->
        <div class="nav-actions">
          <a
            href="tel:+8801324736400"
            class="btn-outline desktop-only-btn"
            style="padding: 0.55rem 1.1rem; font-size: 0.85rem;"
          >
            📞 +880 1324-736400
          </a>
          <button
            @click="$emit('open-site-visit')"
            class="btn-gold desktop-only-btn"
            style="padding: 0.6rem 1.3rem; font-size: 0.88rem;"
          >
            Book VIP Tour
          </button>

          <!-- Mobile Compact Phone Button -->
          <a
            href="tel:+8801324736400"
            class="mobile-phone-btn"
            aria-label="Call Customer Care"
          >
            📞
          </a>

          <!-- Mobile Hamburger Toggle Button -->
          <button
            @click="mobileDrawerOpen = true"
            class="mobile-toggle"
            aria-label="Open Mobile Navigation"
          >
            ☰
          </button>
        </div>
      </div>
    </div>

    <!-- Teleport Mobile Slide-Out Drawer directly to body to guarantee maximum z-index -->
    <ClientOnly>
      <Teleport to="body">
        <div v-if="mobileDrawerOpen" class="mobile-drawer-overlay" @click.self="mobileDrawerOpen = false">
          <div class="mobile-drawer">
            <div>
              <!-- Drawer Header -->
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem;">
                <img
                  src="/images/logo/gangchil_luxury_logo.svg"
                  alt="Gangchil Homes"
                  style="height: 38px; width: auto; max-width: 220px;"
                />
                <button
                  @click="mobileDrawerOpen = false"
                  style="background: none; border: none; color: var(--gold-light); font-size: 1.6rem; cursor: pointer; padding: 0.5rem; line-height: 1;"
                  aria-label="Close Drawer"
                >
                  ✕
                </button>
              </div>

              <!-- Drawer Navigation Links -->
              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <NuxtLink
                  to="/"
                  @click="mobileDrawerOpen = false"
                  style="padding: 0.75rem 1rem; color: var(--text-primary); text-decoration: none; font-weight: 600; border-radius: var(--radius-sm); background: var(--bg-surface);"
                >
                  🏠 Home
                </NuxtLink>

                <div style="padding: 0.5rem 1rem; font-size: 0.75rem; color: var(--gold-light); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
                  Properties &amp; Land
                </div>
                <NuxtLink
                  to="/plots"
                  @click="mobileDrawerOpen = false"
                  style="padding: 0.5rem 1rem 0.5rem 1.75rem; color: var(--text-secondary); text-decoration: none; font-size: 0.92rem;"
                >
                  🌿 Land &amp; Plots (3, 5, 10, 20 Katha)
                </NuxtLink>
                <NuxtLink
                  to="/flats"
                  @click="mobileDrawerOpen = false"
                  style="padding: 0.5rem 1rem 0.5rem 1.75rem; color: var(--text-secondary); text-decoration: none; font-size: 0.92rem;"
                >
                  🏢 Luxury Flats &amp; Sky Duplexes
                </NuxtLink>
                <NuxtLink
                  to="/hotel-suites"
                  @click="mobileDrawerOpen = false"
                  style="padding: 0.5rem 1rem 0.5rem 1.75rem; color: var(--text-secondary); text-decoration: none; font-size: 0.92rem;"
                >
                  🏨 Hotel Suites (14% ROI)
                </NuxtLink>

                <div style="padding: 0.5rem 1rem; font-size: 0.75rem; color: var(--emerald-light); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
                  Planning &amp; Finance
                </div>
                <NuxtLink
                  to="/master-plan"
                  @click="mobileDrawerOpen = false"
                  style="padding: 0.5rem 1rem 0.5rem 1.75rem; color: var(--text-secondary); text-decoration: none; font-size: 0.92rem;"
                >
                  🗺️ 3,500-Acre Masterplan
                </NuxtLink>
                <NuxtLink
                  to="/emi-calculator"
                  @click="mobileDrawerOpen = false"
                  style="padding: 0.5rem 1rem 0.5rem 1.75rem; color: var(--text-secondary); text-decoration: none; font-size: 0.92rem;"
                >
                  📐 Land &amp; EMI Calculator
                </NuxtLink>
                <NuxtLink
                  to="/legal-compliance"
                  @click="mobileDrawerOpen = false"
                  style="padding: 0.5rem 1rem 0.5rem 1.75rem; color: var(--text-secondary); text-decoration: none; font-size: 0.92rem;"
                >
                  ⚖️ Legal &amp; Deed Hub (CS/SA/RS/BS)
                </NuxtLink>

                <NuxtLink
                  to="/contact"
                  @click="mobileDrawerOpen = false"
                  style="padding: 0.75rem 1rem; color: var(--text-primary); text-decoration: none; font-weight: 600; border-radius: var(--radius-sm); margin-top: 0.5rem;"
                >
                  📞 Contact Offices
                </NuxtLink>
              </div>
            </div>

            <!-- Drawer Bottom CTAs -->
            <div style="border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; margin-top: 2rem;">
              <button
                @click="handleSiteVisitClick"
                class="btn-gold"
                style="width: 100%; margin-bottom: 0.75rem; text-align: center; padding: 0.85rem;"
              >
                Book Free VIP Site Tour
              </button>
              <a
                href="https://wa.me/8801324736400"
                target="_blank"
                class="btn-outline"
                style="width: 100%; text-align: center; display: block; padding: 0.75rem; font-size: 0.88rem; color: var(--emerald-light); border-color: var(--border-emerald);"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Teleport>
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['open-site-visit'])
const mobileDrawerOpen = ref(false)

const handleSiteVisitClick = () => {
  mobileDrawerOpen.value = false
  emit('open-site-visit')
}
</script>
