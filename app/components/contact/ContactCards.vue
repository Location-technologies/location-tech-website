<script setup lang="ts">
const cards = [
  {
    icon: 'mdi:map-marker-outline',
    title: 'Office Address',
    content: 'Chakwal,<br />Pakistan',
    href: null,
  },
  {
    icon: 'mdi:email-outline',
    title: 'Email Us',
    content: 'info@locationtechnologies.io',
    href: 'mailto:info@locationtechnologies.io',
  },
  {
    icon: 'mdi:phone-outline',
    title: 'Call Us',
    content: '+92 334 8706354',
    href: 'tel:+923348706354',
  },
]
</script>

<template>
  <section class="relative bg-gradient-to-b from-brand-dark to-[#0B1A2E] pt-20 pb-8">
    <div class="mx-auto max-w-[1240px] px-4 sm:px-8">
      <div class="grid gap-[26px] md:grid-cols-3">
        <component
          :is="card.href ? 'a' : 'div'"
          v-for="(card, index) in cards"
          :key="card.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: Math.min(index * 100, 400) } }"
          :visible-once="true"
          :href="card.href ?? undefined"
          class="rounded-[20px] border-teal bg-white/[0.025] px-[34px] py-10 text-center backdrop-blur-[14px] transition-all duration-350 hover:-translate-y-2 hover:border-brand-cyan/40 hover:shadow-[0_30px_60px_-30px_rgba(0,180,216,0.5)]"
        >
          <div class="mx-auto mb-[22px] flex h-16 w-16 items-center justify-center rounded-[17px] border border-brand-cyan/30 bg-gradient-to-br from-brand-cyan/16 to-brand-green/16">
            <Icon :name="card.icon" class="h-8 w-8 text-brand-cyan" />
          </div>
          <h3 class="mb-2.5 font-syne text-xl font-bold text-white">
            {{ card.title }}
          </h3>
          <p
            class="text-[15.5px] leading-relaxed text-[#94A6BE] transition-colors"
            :class="card.href ? 'hover:text-brand-cyan' : ''"
            v-html="card.content"
          />
        </component>
      </div>
    </div>
  </section>
</template>
