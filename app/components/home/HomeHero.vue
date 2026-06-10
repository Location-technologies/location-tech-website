<script setup lang="ts">
const trustStats = [
  { value: '6+', label: 'Projects delivered' },
  { value: '6+', label: 'Industries served' },
  { value: '2+', label: 'Years of expertise' },
]
</script>

<template>
  <section
    id="home"
    class="relative flex min-h-screen items-center overflow-hidden bg-brand-dark circuit-bg pt-24 pb-20 min-[400px]:pt-[130px]"
  >
    <div class="dot-layer" aria-hidden="true" />

    <!-- Radial glows -->
    <div
      class="pointer-events-none absolute -top-[120px] -right-20 h-[560px] w-[560px] rounded-full bg-brand-cyan/16 blur-[90px]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -bottom-40 -left-[120px] h-[480px] w-[480px] rounded-full bg-brand-green/13 blur-[90px]"
      aria-hidden="true"
    />

    <div class="relative z-[2] mx-auto w-full max-w-[1240px] px-4 min-[400px]:px-5 sm:px-8">
      <div class="grid items-center gap-8 min-[400px]:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <!-- Left copy -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 100 } }"
          class="w-full min-w-0 max-w-[620px]"
        >
          <span class="block font-dm text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-cyan min-[400px]:text-[13px] min-[400px]:tracking-[0.18em]">
            Pakistan's Leading Location Tech Company
          </span>

          <h1 class="mt-4 mb-5 font-syne text-[clamp(2rem,8vw,4.75rem)] font-extrabold leading-[1.05] text-white min-[400px]:mt-[22px] min-[400px]:mb-6 min-[400px]:leading-[1.02]">
            We Map. We Track.<br />
            We <span class="gradient-text">Connect.</span>
          </h1>

          <p class="max-w-[540px] text-base leading-relaxed text-[#94A6BE] min-[400px]:text-[clamp(17px,1.4vw,20px)]">
            Precision GIS solutions, real-time GPS tracking, and intelligent geofencing for modern enterprises.
          </p>

          <div class="mt-8 flex flex-col gap-3 min-[400px]:mt-[38px] min-[400px]:flex-row min-[400px]:flex-wrap min-[400px]:gap-4">
            <BaseButton
              to="/services"
              icon="mdi:arrow-right"
              class="w-full justify-center !text-[#04121C] min-[400px]:w-auto"
            >
              Explore Services
            </BaseButton>
            <BaseButton
              variant="ghost"
              to="/portfolio"
              class="w-full justify-center !border-white/22 !text-[#E6EDF6] hover:!border-brand-cyan hover:!bg-brand-cyan/8 hover:!text-white min-[400px]:w-auto"
            >
              View Portfolio
            </BaseButton>
          </div>

          <div class="mt-8 grid grid-cols-3 gap-3 min-[400px]:mt-11 min-[400px]:flex min-[400px]:flex-wrap min-[400px]:items-center min-[400px]:gap-[26px]">
            <template v-for="(stat, i) in trustStats" :key="stat.label">
              <div v-if="i > 0" class="hidden h-[38px] w-px bg-white/12 min-[400px]:block" aria-hidden="true" />
              <div class="flex min-w-0 flex-col gap-0.5">
                <b class="font-syne text-xl text-white min-[400px]:text-[26px]">{{ stat.value }}</b>
                <span class="text-[11px] leading-tight text-brand-gray min-[400px]:text-[13px]">{{ stat.label }}</span>
              </div>
            </template>
          </div>
        </div>

        <!-- Right globe visual -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.85 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 300 } }"
          class="relative order-first grid min-h-[260px] place-items-center overflow-hidden min-[400px]:min-h-[360px] lg:order-none lg:min-h-[460px]"
        >
          <div class="relative mx-auto h-[220px] w-[220px] max-w-full animate-float min-[400px]:h-[300px] min-[400px]:w-[300px] lg:h-[400px] lg:w-[400px]">
            <!-- Pulsing rings -->
            <div class="absolute inset-0 animate-ring-pulse rounded-full border border-brand-cyan/22" />
            <div class="absolute -inset-5 animate-ring-pulse rounded-full border border-brand-green/16 [animation-delay:1.3s] min-[400px]:-inset-[42px]" />
            <div class="absolute -inset-10 animate-ring-pulse rounded-full border border-brand-cyan/10 [animation-delay:2.6s] min-[400px]:-inset-[88px]" />

            <!-- Static rings -->
            <div class="absolute inset-0 rounded-full border border-brand-cyan/22" />
            <div class="absolute -inset-5 rounded-full border border-brand-green/16 min-[400px]:-inset-[42px]" />

            <!-- Globe core -->
            <div
              class="absolute inset-0 overflow-hidden rounded-full border border-brand-cyan/35 bg-[#0B1C30] shadow-[inset_0_0_70px_rgba(0,180,216,0.18),0_0_80px_-20px_rgba(0,180,216,0.55)]"
              style="background: radial-gradient(circle at 32% 28%, rgba(0,200,150,0.30), transparent 55%), radial-gradient(circle at 70% 75%, rgba(0,180,216,0.32), transparent 55%), #0B1C30"
            >
              <svg
                class="absolute inset-0 h-full w-full animate-globe-spin opacity-55"
                viewBox="0 0 200 200"
                fill="none"
                stroke="rgba(0,200,150,0.8)"
                stroke-width="0.8"
                aria-hidden="true"
              >
                <circle cx="100" cy="100" r="92" />
                <ellipse cx="100" cy="100" rx="92" ry="34" />
                <ellipse cx="100" cy="100" rx="92" ry="66" />
                <ellipse cx="100" cy="100" rx="40" ry="92" />
                <ellipse cx="100" cy="100" rx="72" ry="92" />
                <line x1="8" y1="100" x2="192" y2="100" />
                <line x1="100" y1="8" x2="100" y2="192" />
              </svg>
            </div>

            <!-- Pins -->
            <div class="absolute top-[30%] left-[36%] z-[4] h-3 w-3 min-[400px]:h-4 min-[400px]:w-4">
              <span class="absolute inset-0 rounded-full gradient-bg shadow-[0_0_0_4px_rgba(0,200,150,0.18),0_0_18px_rgba(0,200,150,0.7)]" />
              <span class="absolute inset-0 animate-ping rounded-full border-[1.5px] border-brand-green" />
            </div>
            <div class="absolute top-[58%] left-[64%] z-[4] h-3 w-3 min-[400px]:h-4 min-[400px]:w-4">
              <span class="absolute inset-0 rounded-full gradient-bg shadow-[0_0_0_4px_rgba(0,200,150,0.18),0_0_18px_rgba(0,200,150,0.7)]" />
              <span class="absolute inset-0 animate-ping rounded-full border-[1.5px] border-brand-green [animation-delay:1s]" />
            </div>
            <div class="absolute top-[70%] left-[30%] z-[4] h-3 w-3 min-[400px]:h-4 min-[400px]:w-4">
              <span class="absolute inset-0 rounded-full gradient-bg shadow-[0_0_0_4px_rgba(0,200,150,0.18),0_0_18px_rgba(0,200,150,0.7)]" />
              <span class="absolute inset-0 animate-ping rounded-full border-[1.5px] border-brand-green [animation-delay:1.8s]" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a
      href="#services"
      class="absolute bottom-6 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brand-gray min-[400px]:bottom-[30px]"
    >
      <span>Scroll</span>
      <span class="relative h-[38px] w-6 rounded-[14px] border-[1.5px] border-white/25">
        <span class="absolute top-[7px] left-1/2 h-[7px] w-[3.5px] -translate-x-1/2 rounded-sm bg-brand-cyan animate-scrolly" />
      </span>
    </a>
  </section>
</template>
