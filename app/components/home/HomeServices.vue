<script setup lang="ts">
const { data } = await useAsyncData('home-services', () =>
  queryCollection('services').first(),
)

const services = computed(() => data.value?.services?.slice(0, 3) ?? [])
</script>

<template>
  <section
    id="services"
    class="relative overflow-hidden bg-gradient-to-b from-brand-dark to-[#0B1A2E] py-16 min-[400px]:py-24"
  >
    <div class="mx-auto max-w-[1240px] px-4 min-[400px]:px-5 sm:px-8">
      <BaseSectionHeader
        centered
        subtitle="End-to-end location intelligence — from spatial data and mapping to live tracking and automated geofencing."
        class="text-white [&_h2]:text-white [&_h2]:text-[clamp(2.125rem,4vw,3rem)] [&_h2]:font-extrabold [&_p]:text-[#94A6BE]"
      >
        What We Do<span class="underline-grad" />
      </BaseSectionHeader>

      <div class="grid gap-7 md:grid-cols-3">
        <BaseCard
          v-for="(service, i) in services"
          :key="service.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: Math.min(i * 100, 400), duration: 500 } }"
          :visible-once="true"
          variant="glass"
          class="group relative overflow-hidden transition-all duration-350 hover:-translate-y-2.5 hover:border-brand-cyan/45 hover:bg-brand-cyan/5 hover:shadow-[0_26px_60px_-28px_rgba(0,180,216,0.55)]"
        >
          <div
            class="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent opacity-0 transition-opacity duration-350 group-hover:opacity-100"
            aria-hidden="true"
          />

          <div class="mb-[26px] flex h-[60px] w-[60px] items-center justify-center rounded-[15px] border border-brand-cyan/30 bg-gradient-to-br from-brand-cyan/16 to-brand-green/16">
            <Icon :name="service.icon" class="h-[30px] w-[30px] text-brand-cyan" />
          </div>

          <h3 class="mb-3 font-syne text-[23px] font-bold text-white">
            {{ service.title }}
          </h3>

          <p class="text-[15.5px] leading-relaxed text-[#94A6BE]">
            {{ service.shortDesc }}
          </p>

          <NuxtLink
            to="/services"
            class="mt-6 inline-flex items-center gap-2 font-dm text-[15px] font-semibold text-brand-cyan transition-[gap] duration-250 group-hover:gap-3.5"
          >
            Learn more
            <Icon name="mdi:arrow-right" class="h-[17px] w-[17px]" />
          </NuxtLink>
        </BaseCard>
      </div>

      <div class="mt-12 text-center">
        <BaseButton variant="ghost" to="/services" class="!border-white/22 !text-[#E6EDF6] hover:!border-brand-cyan hover:!bg-brand-cyan/8 hover:!text-white">
          View All Services
        </BaseButton>
      </div>
    </div>
  </section>
</template>
