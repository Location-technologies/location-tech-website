<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    buttonText?: string
    buttonTo?: string
  }>(),
  {
    title: 'Ready to map your future?',
    subtitle: 'Let\'s build the location intelligence that moves your operations forward. Talk to our team today.',
    buttonText: 'Contact Us Today',
    buttonTo: '/contact',
  },
)

const { el, isVisible } = useScrollReveal()
</script>

<template>
  <section id="contact" class="overflow-hidden bg-brand-dark py-16 min-[400px]:py-24">
    <div class="mx-auto max-w-[1240px] px-4 min-[400px]:px-5 sm:px-8">
      <div
        ref="el"
        :class="[
          'relative overflow-hidden rounded-[30px] gradient-bg px-5 py-12 text-center shadow-[0_40px_90px_-40px_rgba(0,180,216,0.6)] transition-all duration-700 min-[400px]:px-8 min-[400px]:py-16 md:px-16 md:py-[70px]',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <div
          class="pointer-events-none absolute inset-0 opacity-[0.18]"
          style="background-image: radial-gradient(rgba(10,22,40,0.5) 1.5px, transparent 1.5px); background-size: 30px 30px;"
          aria-hidden="true"
        />

        <h2 class="relative font-syne text-[clamp(2.125rem,4.4vw,3.5rem)] font-extrabold leading-[1.05] text-[#04121C]">
          {{ title }}
        </h2>

        <p class="relative mx-auto mt-[18px] mb-9 max-w-[560px] text-[19px] text-[rgba(4,18,28,0.78)]">
          {{ subtitle }}
        </p>

        <BaseButton
          variant="dark"
          :to="buttonTo"
          icon="mdi:arrow-right"
          class="relative"
        >
          {{ buttonText }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>
