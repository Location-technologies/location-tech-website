<script setup lang="ts">
const steps = [
  {
    n: '1',
    title: 'Requirement Analysis',
    desc: 'We map your goals, data, and constraints to define exactly what success looks like.',
    icon: 'mdi:clipboard-text-outline',
  },
  {
    n: '2',
    title: 'System Design',
    desc: 'We architect the solution — data models, integrations, and dashboards built to scale.',
    icon: 'mdi:sitemap',
  },
  {
    n: '3',
    title: 'Development & Testing',
    desc: 'We build and rigorously test for accuracy, reliability, and real-world field conditions.',
    icon: 'mdi:code-braces',
  },
  {
    n: '4',
    title: 'Deployment & Support',
    desc: 'We launch, train your team, and provide 24/7 monitoring and ongoing support.',
    icon: 'mdi:rocket-launch-outline',
  },
]

/**
 * Bubble centers sit on the orbit (~34% radius from center).
 * Copy panels radiate outward so they never collide with the ring.
 */
const ringLayout = [
  {
    // 12 o'clock
    wrap: 'top-[16%] left-1/2 -translate-x-1/2 -translate-y-1/2',
    stack: 'flex-col-reverse items-center text-center',
    panel: 'mb-4 w-[230px]',
    iconAlign: 'justify-center',
  },
  {
    // 3 o'clock
    wrap: 'top-1/2 left-[84%] -translate-x-1/2 -translate-y-1/2',
    stack: 'flex-row items-center text-left',
    panel: 'ml-4 w-[210px]',
    iconAlign: 'justify-start',
  },
  {
    // 6 o'clock
    wrap: 'top-[84%] left-1/2 -translate-x-1/2 -translate-y-1/2',
    stack: 'flex-col items-center text-center',
    panel: 'mt-4 w-[230px]',
    iconAlign: 'justify-center',
  },
  {
    // 9 o'clock
    wrap: 'top-1/2 left-[16%] -translate-x-1/2 -translate-y-1/2',
    stack: 'flex-row-reverse items-center text-right',
    panel: 'mr-4 w-[210px]',
    iconAlign: 'justify-end',
  },
]
</script>

<template>
  <section id="how-we-work" class="process relative overflow-hidden bg-gradient-to-b from-brand-dark to-[#0B1A2E] py-24 min-[981px]:py-[110px]">
    <div class="dot-layer opacity-[0.04]" aria-hidden="true" />
    <div
      class="pointer-events-none absolute top-[55%] left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/[0.07] blur-[110px]"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-8">
      <BaseSectionHeader
        centered
        eyebrow="Our Process"
        subtitle="A clear, proven path from first conversation to live deployment — and support that doesn't stop there."
        class="relative z-[2] mx-auto mb-12 max-w-[640px] min-[981px]:mb-10 [&_h2]:inline-block [&_h2]:text-white [&_p]:text-[#94A6BE]"
      >
        How We Work<span class="underline-grad" />
      </BaseSectionHeader>

      <!-- Mobile / tablet -->
      <ol class="relative z-[2] mx-auto grid max-w-3xl list-none grid-cols-1 gap-4 min-[561px]:grid-cols-2 min-[561px]:gap-5 min-[981px]:hidden">
        <li
          v-for="(step, index) in steps"
          :key="step.n"
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 550, delay: Math.min(index * 90, 360) } }"
          :visible-once="true"
          class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-brand-cyan/30 hover:bg-white/[0.05]"
        >
          <div
            class="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-cyan to-brand-green opacity-80"
            aria-hidden="true"
          />
          <div class="flex items-start gap-4 pl-2">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full gradient-bg font-syne text-lg font-bold text-[#04121C] shadow-[0_0_0_5px_rgba(0,180,216,0.12)]">
              {{ step.n }}
            </div>
            <div class="min-w-0 pt-0.5">
              <div class="mb-1.5 flex items-center gap-2">
                <Icon :name="step.icon" class="h-4 w-4 shrink-0 text-brand-cyan" />
                <h3 class="font-syne text-base font-semibold tracking-tight text-white">
                  {{ step.title }}
                </h3>
              </div>
              <p class="text-sm leading-relaxed text-[#94A6BE]">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </li>
      </ol>

      <!-- Desktop circular layout -->
      <div
        class="steps-ring relative z-[2] mx-auto hidden min-[981px]:block"
        style="width: min(900px, 100%); aspect-ratio: 1;"
      >
        <div
          class="pointer-events-none absolute inset-[12%] rounded-full bg-gradient-to-b from-brand-cyan/[0.05] to-transparent"
          aria-hidden="true"
        />

        <svg
          class="pointer-events-none absolute inset-[16%] h-[68%] w-[68%] overflow-visible"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="process-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00B4D8" />
              <stop offset="50%" stop-color="#00C896" />
              <stop offset="100%" stop-color="#38E0FF" />
            </linearGradient>
          </defs>
          <!-- Soft track -->
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="rgba(0,180,216,0.12)"
            stroke-width="3.5"
          />
          <!-- Accent orbit -->
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="url(#process-ring-grad)"
            stroke-width="1.1"
            stroke-linecap="round"
            stroke-dasharray="28 8"
            opacity="0.85"
          />
          <!-- Cardinal ticks -->
          <g stroke="#00C896" stroke-width="1.2" stroke-linecap="round" opacity="0.55">
            <line x1="50" y1="1.5" x2="50" y2="5.5" />
            <line x1="98.5" y1="50" x2="94.5" y2="50" />
            <line x1="50" y1="98.5" x2="50" y2="94.5" />
            <line x1="1.5" y1="50" x2="5.5" y2="50" />
          </g>
        </svg>

        <!-- Center hub -->
        <div
          class="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div class="relative flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full border border-brand-cyan/25 bg-[#07101f]/90 shadow-[0_0_80px_-10px_rgba(0,180,216,0.55)] backdrop-blur-sm">
            <div class="absolute inset-[10px] rounded-full border border-dashed border-brand-green/30" />
            <Icon name="mdi:map-marker-path" class="relative z-[1] h-7 w-7 text-brand-cyan" />
            <span class="relative z-[1] mt-2 font-dm text-[10px] font-semibold tracking-[0.18em] text-brand-green uppercase">
              Process
            </span>
          </div>
        </div>

        <div
          v-for="(step, index) in steps"
          :key="`ring-${step.n}`"
          v-motion
          :initial="{ opacity: 0, scale: 0.88 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 650, delay: Math.min(index * 120, 480) } }"
          :visible-once="true"
          class="absolute z-[3]"
          :class="ringLayout[index]!.wrap"
        >
          <div
            class="flex"
            :class="ringLayout[index]!.stack"
          >
            <div class="relative flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full gradient-bg font-syne text-[22px] font-bold text-[#04121C] shadow-[0_0_0_8px_rgba(0,180,216,0.14),0_16px_40px_-14px_rgba(0,180,216,0.7)]">
              <span
                class="pointer-events-none absolute -inset-1 animate-[ringPulse_3.6s_ease-out_infinite] rounded-full border border-brand-cyan/35"
                :style="{ animationDelay: `${index * 0.5}s` }"
                aria-hidden="true"
              />
              {{ step.n }}
            </div>

            <div
              class="rounded-2xl border border-white/12 bg-[#081224]/88 px-4 py-3.5 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.9)] backdrop-blur-md"
              :class="ringLayout[index]!.panel"
            >
              <div
                class="mb-1.5 flex items-center gap-2"
                :class="ringLayout[index]!.iconAlign"
              >
                <span class="flex h-6 w-6 items-center justify-center rounded-md bg-brand-cyan/15 text-brand-cyan">
                  <Icon :name="step.icon" class="h-3.5 w-3.5" />
                </span>
                <h3 class="font-syne text-[14.5px] font-semibold tracking-tight text-white">
                  {{ step.title }}
                </h3>
              </div>
              <p class="text-[12.5px] leading-relaxed text-[#94A6BE]">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
