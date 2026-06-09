<script setup lang="ts">
const bullets = [
  {
    title: 'Accurate & Reliable',
    description: 'Survey-grade precision and uptime you can build operations on.',
  },
  {
    title: 'Custom Solutions',
    description: 'Systems tailored to your workflow — never one-size-fits-all.',
  },
  {
    title: 'Local Expertise',
    description: 'Pakistan-based team with national mapping and field experience.',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock monitoring and a team that responds fast.',
  },
]

const barHeights = ['38%', '60%', '48%', '78%', '66%', '92%', '74%', '100%']
</script>

<template>
  <section id="why" class="relative overflow-hidden py-16 min-[400px]:py-24">
    <div class="mx-auto grid max-w-[1240px] items-center gap-10 px-4 min-[400px]:gap-14 min-[400px]:px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
      <!-- Left copy -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 26 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        :visible-once="true"
        class="min-w-0"
      >
        <span class="block font-dm text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-cyan min-[400px]:text-[13px] min-[400px]:tracking-[0.18em]">
          Why Choose Us
        </span>

        <h2 class="mt-3 font-syne text-[clamp(1.75rem,6vw,2.875rem)] font-extrabold leading-[1.08] text-white min-[400px]:mt-4">
          Location intelligence,<br />built for the field.
        </h2>

        <p class="mt-5 mb-7 max-w-[460px] text-[15px] leading-relaxed text-[#94A6BE] min-[400px]:mt-[22px] min-[400px]:mb-9 min-[400px]:text-[17px]">
          We pair deep technical know-how with on-the-ground understanding of Pakistan's terrain, infrastructure, and industries.
        </p>

        <div class="flex flex-col gap-4 min-[400px]:gap-5">
          <div
            v-for="bullet in bullets"
            :key="bullet.title"
            class="flex items-start gap-3 min-[400px]:gap-4"
          >
            <span class="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[9px] border border-brand-green/40 bg-gradient-to-br from-brand-cyan/20 to-brand-green/20">
              <Icon name="mdi:check" class="h-[15px] w-[15px] text-brand-green" />
            </span>
            <div class="min-w-0">
              <b class="mb-0.5 block font-syne text-base text-white min-[400px]:text-lg">{{ bullet.title }}</b>
              <span class="text-sm leading-snug text-[#94A6BE] min-[400px]:text-[14.5px]">{{ bullet.description }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right visual collage -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 26 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150 } }"
        :visible-once="true"
        class="relative mx-auto w-full max-w-[420px] min-h-[380px] min-[400px]:min-h-[440px] lg:max-w-none"
      >
        <div
          class="absolute -top-6 -right-6 z-0 hidden h-[200px] w-[200px] rounded-full border border-dashed border-brand-cyan/18 min-[400px]:-top-10 min-[400px]:-right-10 min-[400px]:block min-[400px]:h-[260px] min-[400px]:w-[260px]"
          aria-hidden="true"
        />

        <div class="relative z-[2] rounded-[22px] border border-brand-cyan/20 bg-white/[0.03] p-6 shadow-[0_30px_70px_-34px_rgba(0,0,0,0.7)] backdrop-blur-[14px] min-[400px]:p-10">
          <div class="font-syne text-[clamp(3rem,12vw,4.375rem)] font-extrabold leading-none">
            <span class="gradient-text">99.9</span><span class="gradient-text text-[clamp(1.75rem,6vw,2.5rem)]">%</span>
          </div>
          <p class="mt-2 text-sm text-[#94A6BE] min-[400px]:text-base">
            Tracking uptime across all deployed fleets
          </p>

          <div class="mt-6 flex h-[72px] items-end gap-1.5 min-[400px]:mt-[30px] min-[400px]:h-[92px] min-[400px]:gap-2">
            <span
              v-for="(height, i) in barHeights"
              :key="i"
              class="block flex-1 rounded-t-md rounded-b-sm gradient-bg opacity-85"
              :style="{ height }"
            />
          </div>
        </div>

        <!-- Floating chips — inline on mobile, floating on larger screens -->
        <div class="mt-4 flex flex-col gap-3 min-[400px]:mt-0">
          <div class="relative z-[3] flex items-center gap-3 rounded-[15px] border border-brand-cyan/30 bg-[rgba(11,28,48,0.92)] px-4 py-3 shadow-[0_18px_44px_-20px_rgba(0,0,0,0.8)] backdrop-blur-[10px] min-[400px]:absolute min-[400px]:top-2 min-[400px]:right-0 min-[400px]:px-[18px] min-[400px]:py-3.5 lg:-right-3">
            <span class="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] gradient-bg">
              <Icon name="mdi:map-marker" class="h-5 w-5 text-[#04121C]" />
            </span>
            <div class="min-w-0">
              <b class="block font-syne text-base text-white">Live</b>
              <span class="text-[12.5px] text-brand-gray">2,400+ assets tracked</span>
            </div>
          </div>

          <div class="relative z-[3] flex items-center gap-3 rounded-[15px] border border-brand-cyan/30 bg-[rgba(11,28,48,0.92)] px-4 py-3 shadow-[0_18px_44px_-20px_rgba(0,0,0,0.8)] backdrop-blur-[10px] min-[400px]:absolute min-[400px]:bottom-4 min-[400px]:left-0 min-[400px]:px-[18px] min-[400px]:py-3.5 lg:-left-[22px]">
            <span class="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] gradient-bg">
              <Icon name="mdi:check" class="h-5 w-5 text-[#04121C]" />
            </span>
            <div class="min-w-0">
              <b class="block font-syne text-base text-white">Geofence alert</b>
              <span class="text-[12.5px] text-brand-gray">Zone entry confirmed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
