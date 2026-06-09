<template>
  <section class="relative">
    <div class="relative h-[460px] overflow-hidden bg-[#0c2236]">
      <div
        class="absolute inset-0"
        style="background-image: linear-gradient(rgba(0,180,216,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.10) 1px, transparent 1px); background-size: 48px 48px;"
        aria-hidden="true"
      />
      <svg class="absolute inset-0 h-full w-full" viewBox="0 0 1440 460" fill="none" preserveAspectRatio="xMidYMid slice">
        <path d="M-50 120 C 300 160, 600 80, 900 200 S 1300 320, 1500 260" stroke="rgba(0,180,216,0.30)" stroke-width="3" />
        <path d="M120 -20 C 200 180, 380 260, 520 460" stroke="rgba(0,200,150,0.25)" stroke-width="2.5" />
        <path d="M-40 360 C 360 300, 720 420, 1080 320 S 1420 200, 1500 240" stroke="rgba(0,180,216,0.22)" stroke-width="2.5" />
        <path d="M980 -20 C 920 160, 1040 300, 980 480" stroke="rgba(0,200,150,0.2)" stroke-width="2" />
      </svg>
      <div class="absolute inset-0 bg-gradient-to-b from-brand-dark/55 via-brand-dark/30 to-brand-dark/75" aria-hidden="true" />

      <div class="absolute top-[46%] left-1/2 z-[3] flex -translate-x-1/2 -translate-y-full flex-col items-center">
        <span class="map-pulse absolute bottom-0.5 h-[22px] w-[22px] rounded-full bg-brand-green/40" aria-hidden="true" />
        <span class="relative z-[2] flex h-[38px] w-[38px] rotate-[-45deg] items-center justify-center rounded-full rounded-br-none gradient-bg shadow-[0_10px_24px_-6px_rgba(0,180,216,0.7)]">
          <Icon name="mdi:crosshairs-gps" class="h-[18px] w-[18px] rotate-45 text-[#04121C]" />
        </span>
      </div>

      <div class="absolute top-[calc(46%+14px)] left-1/2 z-[4] min-w-[280px] -translate-x-1/2 rounded-2xl border border-brand-cyan/40 bg-brand-dark/92 px-[22px] py-[18px] text-left shadow-[0_24px_50px_-22px_rgba(0,0,0,0.8)] backdrop-blur-sm max-[560px]:w-[calc(100%-40px)] max-[560px]:min-w-0">
        <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] gradient-bg">
            <Icon name="mdi:map-marker" class="h-[22px] w-[22px] text-[#04121C]" />
          </span>
          <div>
            <h4 class="font-syne text-base text-white">
              Location Technologies
            </h4>
            <div class="text-[13px] text-[#94A6BE]">
              Rawalpindi, Punjab, Pakistan
            </div>
          </div>
        </div>
        <a
          href="https://maps.google.com/maps?q=Rawalpindi+Pakistan"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-3.5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-cyan hover:text-brand-green"
        >
          Get Directions
          <Icon name="mdi:arrow-right" class="h-3.5 w-3.5" />
        </a>
      </div>

      <div class="absolute right-[18px] bottom-4 z-[4] rounded-lg border border-white/8 bg-[rgba(8,17,32,0.6)] px-3 py-1.5 font-mono text-[11.5px] text-[#94A6BE]/70">
        // Google Maps embed goes here
      </div>
    </div>
  </section>
</template>
