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
      <BaseSectionHeader
        centered
        eyebrow="Our Principles"
        subtitle="The values that shape every map we draw, every asset we track, and every boundary we draw."
        class="mx-auto mb-16 max-w-[640px] [&_h2]:inline-block [&_p]:text-[#5b6b7e]"
      >
        What Drives Us<span class="underline-grad" />
      </BaseSectionHeader>

      <div class="grid grid-cols-2 gap-6 max-[560px]:grid-cols-1 lg:grid-cols-4">
        <div
          v-for="(value, index) in values"
          :key="value.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: Math.min(index * 100, 400) } }"
          :visible-once="true"
          class="value-card group relative overflow-hidden rounded-[18px] border border-[#e2eef0] bg-white p-[34px_28px] transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:bg-gradient-to-br hover:from-brand-cyan hover:to-brand-green hover:shadow-[0_26px_50px_-26px_rgba(0,150,180,0.45)] max-[560px]:col-span-1"
        >
          <span class="value-num absolute top-6 right-[26px] font-syne text-[15px] font-extrabold text-[#b0cdd4] transition-colors duration-300">{{ value.num }}</span>
          <div class="value-icon mb-[22px] flex h-[58px] w-[58px] items-center justify-center rounded-[15px] bg-gradient-to-br from-brand-cyan/12 to-brand-green/12 transition-colors duration-300">
            <Icon :name="value.icon" class="value-icon-glyph h-[30px] w-[30px] text-[#0096b4] transition-colors duration-300" />
          </div>
          <h3 class="value-title mb-2 font-syne text-[21px] font-bold text-brand-dark transition-colors duration-300">
            {{ value.title }}
          </h3>
          <p class="value-desc text-[14.5px] leading-[1.55] text-[#5b6b7e] transition-colors duration-300">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.value-card:hover .value-num {
  color: rgb(255 255 255 / 0.4) !important;
}

.value-card:hover .value-icon {
  background: rgb(255 255 255 / 0.15) !important;
}

.value-card:hover :deep(.value-icon-glyph) {
  color: #fff !important;
}

.value-card:hover .value-title {
  color: #fff !important;
}

.value-card:hover .value-desc {
  color: rgb(255 255 255 / 0.9) !important;
}
</style>
