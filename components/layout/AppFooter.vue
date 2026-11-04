<template>
  <footer style="background: #040907; border-top: 1px solid var(--border-subtle); padding: 5rem 0 2.5rem 0; margin-top: 6rem;">
    <div class="gangchil-container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 3rem; margin-bottom: 4rem;">
        <!-- Brand Info -->
        <div>
          <div class="brand-logo" style="margin-bottom: 1.25rem;">
            <img
              src="/images/logo/gangchil_luxury_logo.svg"
              alt="Gangchil Homes & Real Estate"
              style="height: 48px; width: auto; max-width: 320px; object-fit: contain;"
            />
          </div>
          <p style="font-size: 0.92rem; line-height: 1.7; margin-bottom: 1.5rem;">
            Pioneering modern, secure, and future-ready land communities in Northern Dhaka. 3,500+ acres of planned nature, wide boulevards, and 100% legal deed registration guarantee.
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <span style="font-size: 0.82rem; color: var(--emerald-light); background: rgba(0, 210, 133, 0.1); border: 1px solid var(--border-emerald); padding: 0.35rem 0.75rem; border-radius: var(--radius-full);">
              ✓ RAJUK Approved Layout
            </span>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--gold-light); margin-bottom: 1.25rem;">Explore Projects</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
            <li><NuxtLink to="/plots" style="color: var(--text-secondary);">3 & 5 Katha Residential Plots</NuxtLink></li>
            <li><NuxtLink to="/plots" style="color: var(--text-secondary);">10 & 20 Katha VIP Estates</NuxtLink></li>
            <li><NuxtLink to="/flats" style="color: var(--text-secondary);">Luxury Duplex Condos</NuxtLink></li>
            <li><NuxtLink to="/hotel-suites" style="color: var(--text-secondary);">Commercial Hotel Suites</NuxtLink></li>
            <li><NuxtLink to="/master-plan" style="color: var(--text-secondary);">Interactive Masterplan 360°</NuxtLink></li>
          </ul>
        </div>

        <!-- Land Buyer Guide -->
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--gold-light); margin-bottom: 1.25rem;">Buyer Resources</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
            <li><NuxtLink to="/legal-compliance" style="color: var(--text-secondary);">Legal Khatian Verification</NuxtLink></li>
            <li><NuxtLink to="/emi-calculator" style="color: var(--text-secondary);">Plot Installment Calculator</NuxtLink></li>
            <li><NuxtLink to="/legal-compliance" style="color: var(--text-secondary);">Expat/NRI Investment Desk</NuxtLink></li>
            <li><NuxtLink to="/contact" style="color: var(--text-secondary);">Book Free AC Site Visit</NuxtLink></li>
          </ul>
        </div>

        <!-- Head Office & Contact -->
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--gold-light); margin-bottom: 1.25rem;">Corporate Office</h4>
          <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">
            📍 <strong>Corporate Office:</strong> 42-43 Siddeswari Circular Road, Treasure Island, Suite No-503, Shantinagar, Dhaka-1217
          </p>
          <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">
            📍 <strong>Project Site:</strong> Dhaka Western Valley, 4-Lane Highway, Savar, Dhaka
          </p>
          <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">
            📞 <strong>Hotline:</strong> +880 1324-736400 / +8802-22890-988
          </p>
          <p style="font-size: 0.9rem;">
            ✉️ <strong>Email:</strong> info@gangchilrealestate.com
          </p>
        </div>
      </div>

      <!-- Copyright Bottom Bar -->
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; font-size: 0.85rem; color: var(--text-muted);">
        <div>
          © {{ new Date().getFullYear() }} Gangchil Real Estate & Living Ltd. All rights reserved.
        </div>
        <div style="display: flex; gap: 1.5rem;">
          <NuxtLink to="/legal-compliance" style="color: var(--text-muted);">Privacy Policy</NuxtLink>
          <NuxtLink to="/legal-compliance" style="color: var(--text-muted);">Terms of Service</NuxtLink>
          <NuxtLink to="/legal-compliance" style="color: var(--text-muted);">Deed Registry Guarantee</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
