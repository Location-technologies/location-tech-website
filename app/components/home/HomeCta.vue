<script setup lang="ts">
import heroBg from '~/assets/images/hero-aerial-night.png'

withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    buttonText?: string
    buttonTo?: string
  }>(),
  {
    title: 'Your next project starts\nwhere the map meets the machine.',
    subtitle: "Let's build something precise. Talk to our team and we'll shape the right solution from day one.",
    buttonText: 'Start a Conversation',
    buttonTo: '/contact',
  },
)

const { el, isVisible } = useScrollReveal()
</script>

<template>
  <section id="cta" class="relative overflow-hidden">

    <!-- Background: aerial image, darkened -->
    <div class="absolute inset-0 z-0">
      <img
        :src="heroBg"
        alt=""
        aria-hidden="true"
        class="h-full w-full object-cover object-top"
      />
      <div
        class="absolute inset-0"
        style="background: linear-gradient(to bottom, rgba(6,16,30,1) 0%, rgba(10,22,40,0.90) 30%, rgba(10,22,40,0.92) 70%, rgba(6,16,30,1) 100%);"
      />
    </div>

    <div class="relative z-[2] mx-auto max-w-[1240px] px-4 py-28 sm:px-8 lg:py-36">
      <div
        ref="el"
        :class="[
          'mx-auto max-w-[700px] text-center transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <!-- Eyebrow -->
        <div class="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-cyan/25 bg-brand-cyan/8 px-5 py-2">
          <Icon name="mdi:map-marker-radius-outline" class="h-4 w-4 text-brand-cyan" />
          <span class="font-dm text-[13px] font-medium text-brand-cyan">Ready to start?</span>
        </div>

        <h2 class="font-syne text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-white">
          Your next project starts<br />
          where the <span class="gradient-text">map meets</span><br />
          the machine.
        </h2>

        <p class="mx-auto mt-7 max-w-[460px] text-[clamp(15px,1.2vw,18px)] leading-relaxed text-white/55">
          {{ subtitle }}
        </p>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <NuxtLink
            :to="buttonTo"
            class="inline-flex items-center gap-2.5 rounded-full gradient-bg px-9 py-4 font-dm text-[16px] font-bold text-[#04121C] shadow-[0_14px_50px_-10px_rgba(0,180,216,0.7)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_18px_60px_-10px_rgba(0,200,150,0.8)]"
          >
            {{ buttonText }}
            <Icon name="mdi:arrow-right" class="h-5 w-5" />
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            class="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/6 px-9 py-4 font-dm text-[16px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            View Portfolio
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
