<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    subtitle?: string
    centered?: boolean
  }>(),
  {
    centered: false,
  },
)

const { el, isVisible } = useScrollReveal()
</script>

<template>
  <div
    ref="el"
    :class="[
      'mb-12 transition-all duration-700',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      { 'text-center': centered },
    ]"
  >
    <span
      v-if="eyebrow"
      class="mb-3 block font-dm text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-cyan"
    >
      {{ eyebrow }}
    </span>
    <h2 class="mt-3.5 inline-block font-syne text-[clamp(2.125rem,4vw,3rem)] font-extrabold text-brand-dark">
      <slot>{{ title }}</slot>
    </h2>
    <p
      v-if="subtitle"
      class="mt-5 max-w-2xl text-[17px] leading-[1.6] text-brand-gray"
      :class="{ 'mx-auto': centered }"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
