<script setup lang="ts">
const stats = [
  { value: '200+', label: 'Vehicles tracked' },
  { value: '99.8%', label: 'System uptime' },
  { value: '3-mo', label: 'Delivery time' },
]

const { el: copyEl, isVisible: copyVisible } = useScrollReveal()
const { el: visualEl, isVisible: visualVisible } = useScrollReveal()
</script>

<template>
  <section class="case relative overflow-hidden bg-[#081120] py-[110px]">
    <div
      class="glow-c pointer-events-none absolute -top-[120px] -right-20 h-[460px] w-[460px] rounded-full bg-brand-cyan/12 blur-[100px]"
      aria-hidden="true"
    />

    <div class="case-grid relative z-[2] mx-auto grid max-w-[1240px] items-center gap-16 px-4 sm:px-8 lg:grid-cols-2">
      <div
        ref="copyEl"
        :class="[
          'case-copy transition-all duration-700',
          copyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <div class="case-num gradient-text-hero font-syne text-[84px] font-extrabold leading-none">
          01
        </div>
        <div class="label font-dm text-[13px] font-semibold tracking-[0.18em] text-brand-cyan uppercase">
          Featured Project
        </div>
        <h2 class="mt-3 font-syne text-[clamp(2rem,4vw,2.875rem)] font-extrabold leading-[1.08] text-white">
          City-Wide Fleet Management System
        </h2>
        <p class="mt-[22px] max-w-[500px] text-[17px] leading-[1.7] text-[#94A6BE]">
          Deployed a city-wide fleet management system for a logistics company in Rawalpindi covering 200+ vehicles with real-time tracking and route optimization.
        </p>

        <div class="case-stats mt-9 flex flex-wrap gap-3.5">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="case-stat min-w-[130px] flex-1 rounded-2xl border-teal bg-white/[0.03] px-5 py-[22px]"
          >
            <b class="block font-syne text-[30px] font-extrabold text-white">
              <span class="gradient-text-hero">{{ stat.value }}</span>
            </b>
            <span class="mt-1 block text-[13.5px] text-[#94A6BE]">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <div
        ref="visualEl"
        :class="[
          'case-visual relative transition-all duration-700 delay-150',
          visualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <div class="map-card relative h-[420px] overflow-hidden rounded-[22px] border border-brand-cyan/45 bg-gradient-to-br from-[#0c2236] to-brand-dark shadow-[0_0_60px_-12px_rgba(0,180,216,0.45),inset_0_0_80px_rgba(0,180,216,0.06)]">
          <div
            class="grid-lines absolute inset-0"
            style="background-image: linear-gradient(rgba(0,180,216,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.12) 1px, transparent 1px); background-size: 42px 42px;"
            aria-hidden="true"
          />
          <div class="route absolute inset-0">
            <svg class="h-full w-full" viewBox="0 0 500 420" fill="none" preserveAspectRatio="none">
              <path d="M60 340 C 140 300, 160 200, 250 190 S 380 150, 430 70" stroke="url(#portfolioRouteGrad)" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 10" />
              <path d="M70 90 C 150 120, 200 260, 320 280 S 420 330, 450 360" stroke="rgba(0,200,150,0.5)" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 9" />
              <defs>
                <linearGradient id="portfolioRouteGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#00B4D8" />
                  <stop offset="1" stop-color="#00C896" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="mpin absolute top-[78%] left-[11%] h-3.5 w-3.5 rounded-full gradient-bg shadow-[0_0_0_4px_rgba(0,200,150,0.18),0_0_16px_rgba(0,200,150,0.7)]" />
          <div class="mpin absolute top-[44%] left-[49%] h-3.5 w-3.5 rounded-full gradient-bg shadow-[0_0_0_4px_rgba(0,200,150,0.18),0_0_16px_rgba(0,200,150,0.7)]" />
          <div class="mpin absolute top-[16%] left-[85%] h-3.5 w-3.5 rounded-full gradient-bg shadow-[0_0_0_4px_rgba(0,200,150,0.18),0_0_16px_rgba(0,200,150,0.7)]" />
          <div class="mpin absolute top-[84%] left-[88%] h-3.5 w-3.5 rounded-full gradient-bg shadow-[0_0_0_4px_rgba(0,200,150,0.18),0_0_16px_rgba(0,200,150,0.7)]" />
          <div class="label-pill absolute bottom-[18px] left-[18px] z-[3] flex items-center gap-2.5 rounded-xl border border-brand-cyan/30 bg-brand-dark/78 px-4 py-2.5 font-mono text-[12.5px] text-[#94A6BE] backdrop-blur-[8px]">
            <span class="liveDot h-2 w-2 rounded-full bg-brand-green shadow-[0_0_10px_#00C896]" />
            <b class="font-syne text-white">LIVE</b>
            · 200 vehicles · Rawalpindi
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mpin {
  position: absolute;
}

.mpin::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1.5px solid #00C896;
  animation: mpinPulse 2.4s ease-out infinite;
}

@keyframes mpinPulse {
  0% { transform: scale(1); opacity: 0.9; }
  100% { transform: scale(3.2); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .mpin::after {
    animation: none;
  }
}
</style>
