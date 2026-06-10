<script setup lang="ts">
const statsSection = ref<HTMLElement | null>(null)
const hasAnimated = ref(false)

const stats = [
  { label: 'Projects Delivered', target: 6, suffix: '+' },
  { label: 'Industries Served', target: 6, suffix: '+' },
  { label: 'Years Experience', target: 2, suffix: '+' },
  { label: 'Client Satisfaction', target: 100, suffix: '%' },
]

const counters = stats.map((s) =>
  useCounter(s.target, { duration: 2000, suffix: s.suffix }),
)

useIntersectionObserver(
  statsSection,
  ([entry]) => {
    if (entry?.isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true
      counters.forEach((c) => c.start())
    }
  },
  { threshold: 0.4 },
)
</script>

<template>
  <section
    id="stats"
    ref="statsSection"
    class="relative overflow-hidden border-y border-brand-cyan/12 bg-[#081120] py-[70px]"
  >
    <div class="dot-layer !opacity-[0.04] ![mask-image:none] ![-webkit-mask-image:none]" aria-hidden="true" />

    <div class="relative z-[2] mx-auto grid max-w-[1240px] grid-cols-1 gap-y-10 px-4 min-[400px]:grid-cols-2 min-[400px]:gap-y-12 min-[400px]:px-5 sm:px-8 md:grid-cols-4 md:gap-y-0">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        class="relative px-2 text-center min-[400px]:px-5"
        :class="i > 0 ? ['min-[400px]:before:absolute min-[400px]:before:top-1/2 min-[400px]:before:left-0 min-[400px]:before:h-[70px] min-[400px]:before:w-px min-[400px]:before:-translate-y-1/2 min-[400px]:before:bg-gradient-to-b min-[400px]:before:from-transparent min-[400px]:before:via-brand-cyan/50 min-[400px]:before:to-brand-green/50 min-[400px]:before:to-transparent', i === 2 ? 'max-md:before:hidden' : ''] : []"
      >
        <div class="font-syne text-[clamp(2.625rem,4.5vw,3.75rem)] font-extrabold leading-none">
          <span class="gradient-text">{{ counters[i]!.display }}</span>
        </div>
        <p class="mt-3 text-[15px] tracking-wide text-[#94A6BE]">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>
