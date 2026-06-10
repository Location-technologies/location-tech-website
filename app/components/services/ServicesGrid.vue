<script setup lang="ts">
const { data } = await useAsyncData('services-grid', () =>
  queryCollection('services').first(),
)

const services = computed(() => data.value?.services ?? [])

/** Middle row (cards 3 & 4) tinted on desktop — matches HTML .svc-card.tint  */
function isTintedDesktop(index: number) {
  return index === 2 || index === 3
}
</script>

<template>
  <section class="bg-white py-[110px]">
    <div class="mx-auto max-w-[1240px] px-4 sm:px-8">
      <BaseSectionHeader
        centered
        eyebrow="What We Offer"
        subtitle="From GIS and SaaS platforms to AI, e-commerce, and cloud infrastructure — full-stack software under one roof."
        class="mx-auto mb-[60px] max-w-[660px] [&_h2]:inline-block [&_p]:text-[#5b6b7e]"
      >
        Full-Stack Software Services<span class="underline-grad" />
      </BaseSectionHeader>

      <div class="grid gap-[26px] md:grid-cols-2">
        <article
          v-for="(service, index) in services"
          :key="service.id"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: Math.min(index * 100, 400) } }"
          :visible-once="true"
          class="svc-card group relative flex items-start gap-[26px] overflow-hidden rounded-[20px] border border-[#e7eef0] bg-white p-[40px_38px] shadow-[0_14px_36px_-26px_rgba(15,40,60,0.35)] transition-all duration-320 max-[560px]:flex-col max-[560px]:gap-[18px] max-[560px]:p-[32px_26px]"
          :class="[
            index % 2 === 1 ? 'max-[980px]:border-[#dcedf0] max-[980px]:bg-[#F0FAFA]' : '',
            isTintedDesktop(index) ? 'min-[981px]:border-[#dcedf0] min-[981px]:bg-[#F0FAFA]' : '',
          ]"
        >
          <div class="svc-icon flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-brand-cyan/20 bg-gradient-to-br from-brand-cyan/12 to-brand-green/12 transition-all duration-350 group-hover:border-transparent group-hover:gradient-bg">
            <Icon :name="service.icon" class="h-8 w-8 text-[#0096b4] transition-colors group-hover:text-[#04121C]" />
          </div>

          <div class="svc-body min-w-0">
            <h3 class="mb-2.5 font-syne text-[23px] font-bold text-brand-dark">
              {{ service.title }}
            </h3>
            <p class="text-[15.5px] leading-[1.62] text-[#5b6b7e]">
              {{ service.description }}
            </p>
            <NuxtLink
              :to="`/contact?service=${service.slug}`"
              class="svc-link mt-[18px] inline-flex items-center gap-2 font-dm text-[15px] font-semibold text-[#0096b4] transition-[gap] duration-250 group-hover:gap-3.5"
            >
              Learn More
              <Icon name="mdi:arrow-right" class="h-[17px] w-[17px]" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.svc-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(135deg, #00B4D8, #00C896);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.35s ease;
}

.svc-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 180, 216, 0.4);
  box-shadow: 0 30px 56px -28px rgba(0, 150, 180, 0.4);
}

.svc-card:hover::before {
  transform: scaleY(1);
}
</style>
