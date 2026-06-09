<script setup lang="ts">
defineProps<{
  breadcrumb: string
  headingLight: string
  headingGradient: string
  subtitle: string
}>()
</script>

<template>
  <section class="relative flex min-h-[44vh] flex-col items-center justify-center overflow-hidden bg-brand-dark py-[150px] pb-[70px] text-center min-[400px]:min-h-[46vh]">
    <div
      class="dot-layer"
      style="mask-image: radial-gradient(ellipse 70% 90% at 50% 40%, #000 20%, transparent 75%); -webkit-mask-image: radial-gradient(ellipse 70% 90% at 50% 40%, #000 20%, transparent 75%);"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute top-[-160px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-cyan/16 blur-[90px]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute right-[8%] bottom-[-160px] h-[360px] w-[360px] rounded-full bg-brand-green/12 blur-[90px]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-8">
      <nav class="mb-[22px] flex items-center justify-center gap-2.5 text-sm text-brand-gray">
        <NuxtLink to="/" class="text-[#94A6BE] transition-colors hover:text-brand-cyan">
          Home
        </NuxtLink>
        <span class="text-white/25">›</span>
        <span class="text-brand-cyan">{{ breadcrumb }}</span>
      </nav>

      <h1 class="font-syne text-[clamp(2.875rem,6vw,5.125rem)] font-extrabold leading-none text-white">
        {{ headingLight }}<span class="gradient-text-hero">{{ headingGradient }}</span>
      </h1>

      <p class="mx-auto mt-[22px] max-w-[620px] text-[clamp(17px,1.5vw,21px)] text-[#94A6BE]">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
