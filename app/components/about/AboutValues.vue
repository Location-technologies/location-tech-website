<script setup lang="ts">
const values = [
  {
    num: '01',
    icon: 'mdi:crosshairs',
    title: 'Precision',
    description: 'Survey-grade accuracy in everything we build and measure.',
  },
  {
    num: '02',
    icon: 'mdi:lightbulb-outline',
    title: 'Innovation',
    description: 'Pushing geospatial technology forward with every project.',
  },
  {
    num: '03',
    icon: 'mdi:shield-check-outline',
    title: 'Reliability',
    description: 'Systems and support you can depend on, around the clock.',
  },
  {
    num: '04',
    icon: 'mdi:map-marker-outline',
    title: 'Local First',
    description: 'Built in Pakistan, for Pakistan\'s terrain and industries.',
  },
]
</script>

<template>
  <section class="bg-[#F0FAFA] py-[110px]">
    <div class="mx-auto max-w-[1240px] px-4 sm:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 26 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        :visible-once="true"
        class="mx-auto mb-16 max-w-[640px] text-center"
      >
        <span class="block font-dm text-[13px] font-semibold tracking-[0.18em] text-[#0090ad] uppercase">Our Principles</span>
        <h2 class="mt-3.5 inline-block font-syne text-[clamp(2.125rem,4vw,3rem)] font-extrabold text-brand-dark">
          What Drives Us
          <span class="underline-grad" />
        </h2>
        <p class="mt-5 text-[17px] leading-relaxed text-[#5b6b7e]">
          The values that shape every map we draw, every asset we track, and every boundary we draw.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-6 max-[560px]:grid-cols-1 lg:grid-cols-4">
        <div
          v-for="(value, index) in values"
          :key="value.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 80 } }"
          :visible-once="true"
          class="group relative overflow-hidden rounded-[18px] border border-[#e2eef0] bg-white p-[34px_28px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_50px_-26px_rgba(0,150,180,0.45)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[18px] before:p-[1.5px] before:bg-gradient-to-br before:from-brand-cyan before:to-brand-green before:opacity-0 before:[mask-composite:exclude] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] hover:before:opacity-100 max-[560px]:col-span-1"
        >
          <span class="absolute top-6 right-[26px] font-syne text-[15px] font-extrabold text-[#cfe7ec]">{{ value.num }}</span>
          <div class="mb-[22px] flex h-[58px] w-[58px] items-center justify-center rounded-[15px] bg-gradient-to-br from-brand-cyan/12 to-brand-green/12">
            <Icon :name="value.icon" class="h-[30px] w-[30px] text-[#0096b4]" />
          </div>
          <h3 class="mb-2 font-syne text-[21px] font-bold text-brand-dark">
            {{ value.title }}
          </h3>
          <p class="text-[14.5px] leading-[1.55] text-[#5b6b7e]">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
