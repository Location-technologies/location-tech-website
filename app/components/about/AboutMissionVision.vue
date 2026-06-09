<script setup lang="ts">
const blocks = [
  {
    icon: 'mdi:crosshairs-gps',
    title: 'Our Mission',
    description: 'To make enterprise-grade location intelligence accessible to every Pakistani business — turning spatial data into faster, smarter, more confident decisions.',
  },
  {
    icon: 'mdi:eye-outline',
    title: 'Our Vision',
    description: 'To be the region\'s most trusted location technology partner — connecting industries from Rawalpindi to the Gulf through precision mapping, tracking, and geofencing.',
  },
]
</script>

<template>
  <section class="bg-gradient-to-b from-brand-dark to-[#0B1A2E] py-[110px]">
    <div class="mx-auto max-w-[1240px] px-4 sm:px-8">
      <BaseSectionHeader
        centered
        eyebrow="Purpose"
        class="mb-16 [&_h2]:inline-block [&_h2]:text-white"
      >
        Mission &amp; Vision<span class="underline-grad" />
      </BaseSectionHeader>

      <div class="grid gap-[30px] md:grid-cols-2">
        <div
          v-for="(block, index) in blocks"
          :key="block.title"
          v-motion
          :initial="{ opacity: 0, y: 26 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: Math.min(index * 100, 400) } }"
          :visible-once="true"
          class="group relative overflow-hidden rounded-[22px] border-teal bg-white/[0.025] p-[46px_44px] backdrop-blur-[14px] transition-all duration-350 hover:-translate-y-2 hover:border-brand-cyan/40 hover:shadow-[0_30px_64px_-30px_rgba(0,180,216,0.5)] min-[560px]:p-[46px_44px] max-[559px]:p-[38px_28px]"
        >
          <div class="absolute top-0 right-0 left-0 h-1 gradient-bg" aria-hidden="true" />
          <div class="mb-[26px] flex h-[66px] w-[66px] items-center justify-center rounded-[17px] border border-brand-cyan/30 bg-gradient-to-br from-brand-cyan/16 to-brand-green/16">
            <Icon :name="block.icon" class="h-[34px] w-[34px] text-brand-cyan" />
          </div>
          <h3 class="mb-3.5 font-syne text-[28px] font-extrabold text-white">
            {{ block.title }}
          </h3>
          <p class="text-[16.5px] leading-[1.7] text-[#94A6BE]">
            {{ block.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
