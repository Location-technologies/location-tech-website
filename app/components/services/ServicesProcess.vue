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
    title: 'UI Wireframing & Design',
    desc: 'We craft intuitive interfaces and interactive wireframes to map out the complete user journey.',
    icon: 'mdi:monitor-dashboard',
  },
  {
    n: '3',
    title: 'System Design',
    desc: 'We architect the solution — data models, integrations, and dashboards built to scale.',
    icon: 'mdi:sitemap',
  },
  {
    n: '4',
    title: 'Development & Testing',
    desc: 'We build and rigorously test for accuracy, reliability, and real-world field conditions.',
    icon: 'mdi:code-braces',
  },
  {
    n: '5',
    title: 'Deployment & Support',
    desc: 'We launch, train your team, and provide 24/7 monitoring and ongoing support.',
    icon: 'mdi:rocket-launch-outline',
  },
]

/**
 * Pentagon layout: 5 nodes at 72° intervals starting from top (theta = -90°).
 * Orbit radius: 34% of container.
 *   x = 50 + 34*cos(theta),  y = 50 + 34*sin(theta)
 *
 * Step 1: theta=-90  (50.0, 16.0)  top          panel UP
 * Step 2: theta=-18  (82.3, 39.5)  upper-right  panel RIGHT
 * Step 3: theta=54   (70.0, 77.5)  lower-right  panel DOWN
 * Step 4: theta=126  (30.0, 77.5)  lower-left   panel DOWN
 * Step 5: theta=198  (17.7, 39.5)  upper-left   panel LEFT
 */
const ringLayout = [
  {
    wrap: 'top-[16%] left-[50%] -translate-x-1/2 -translate-y-1/2',
    stack: 'flex-col-reverse items-center text-center',
    panel: 'mb-4 w-[200px]',
    iconAlign: 'justify-center',
  },
  {
    wrap: 'top-[39.5%] left-[82.3%] -translate-x-1/2 -translate-y-1/2',
    stack: 'flex-row items-center text-left',
    panel: 'ml-4 w-[185px]',
    iconAlign: 'justify-start',
  },
  {
    wrap: 'top-[77.5%] left-[70%] -translate-x-1/2 -translate-y-1/2',
    stack: 'flex-col items-center text-center',
    panel: 'mt-4 w-[200px]',
    iconAlign: 'justify-center',
  },
  {
    wrap: 'top-[77.5%] left-[30%] -translate-x-1/2 -translate-y-1/2',
    stack: 'flex-col items-center text-center',
    panel: 'mt-4 w-[200px]',
    iconAlign: 'justify-center',
  },
  {
    wrap: 'top-[39.5%] left-[17.7%] -translate-x-1/2 -translate-y-1/2',
    stack: 'flex-row-reverse items-center text-right',
    panel: 'mr-4 w-[185px]',
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

      <!-- Desktop pentagon layout -->
      <div
        class="steps-ring relative z-[2] mx-auto hidden min-[981px]:block"
        style="width: min(900px, 100%);"
      >
        <!-- aspect-ratio box + overflow room for bottom panels -->
        <div style="position: relative; padding-bottom: 118%;">

          <!-- Subtle inner glow -->
          <div
            class="pointer-events-none absolute rounded-full bg-gradient-to-b from-brand-cyan/[0.04] to-transparent"
            style="inset: 18% 18% 36% 18%;"
            aria-hidden="true"
          />

          <!-- SVG: orbit + pentagon connector -->
          <svg
            class="pointer-events-none absolute overflow-visible"
            style="top: 0; left: 0; width: 100%; height: 85%;"
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

            <!-- Orbit track -->
            <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(0,180,216,0.14)" stroke-width="2.5" />
            <!-- Dashed accent orbit -->
            <circle
              cx="50" cy="50" r="34"
              fill="none"
              stroke="url(#process-ring-grad)"
              stroke-width="1"
              stroke-linecap="round"
              stroke-dasharray="16 6"
              opacity="0.65"
            />

            <!-- Pentagon connector lines between consecutive nodes -->
            <polygon
              points="50,16 82.3,39.5 70,77.5 30,77.5 17.7,39.5"
              fill="none"
              stroke="rgba(0,180,216,0.10)"
              stroke-width="1"
              stroke-dasharray="2.5 3"
            />

            <!-- Accent ticks at each node on the orbit -->
            <g stroke="url(#process-ring-grad)" stroke-width="1.8" stroke-linecap="round" opacity="0.75">
              <line x1="50"   y1="10"   x2="50"   y2="14.5" />
              <line x1="85.5" y1="37.2" x2="82.9" y2="40.2" />
              <line x1="72.8" y1="80.5" x2="70.4" y2="77.8" />
              <line x1="27.2" y1="80.5" x2="29.6" y2="77.8" />
              <line x1="14.5" y1="37.2" x2="17.1" y2="40.2" />
            </g>
          </svg>

          <!-- Center hub (positioned at 50%, 42.5% = 50% of the 85% SVG height) -->
          <div
            class="pointer-events-none absolute flex items-center justify-center"
            style="top: 42.5%; left: 50%; transform: translate(-50%, -50%);"
            aria-hidden="true"
          >
            <div class="relative flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full border border-brand-cyan/25 bg-[#07101f]/90 shadow-[0_0_80px_-10px_rgba(0,180,216,0.55)] backdrop-blur-sm">
              <div class="absolute inset-[10px] rounded-full border border-dashed border-brand-green/30" />
              <Icon name="mdi:map-marker-path" class="relative z-[1] h-7 w-7 text-brand-cyan" />
              <span class="relative z-[1] mt-2 font-dm text-[10px] font-semibold tracking-[0.18em] text-brand-green uppercase">
                Process
              </span>
            </div>
          </div>

          <!--
            Step nodes.
            Wrap positions are % of the container width (which equals the SVG viewport width).
            SVG occupies 85% of the padded height, so a node at SVG-y=16% sits at
            container-top = 16% * 85% = 13.6% → we use top values scaled by 0.85.
            Step 1: top=16*0.85=13.6%  left=50%
            Step 2: top=39.5*0.85=33.6% left=82.3%
            Step 3: top=77.5*0.85=65.9% left=70%
            Step 4: top=77.5*0.85=65.9% left=30%
            Step 5: top=39.5*0.85=33.6% left=17.7%
          -->
          <div
            v-for="(step, index) in steps"
            :key="`ring-${step.n}`"
            v-motion
            :initial="{ opacity: 0, scale: 0.85 }"
            :visible="{ opacity: 1, scale: 1, transition: { duration: 650, delay: Math.min(index * 130, 520) } }"
            :visible-once="true"
            class="absolute z-[3]"
            :class="ringLayout[index]!.wrap"
          >
            <div
              class="flex"
              :class="ringLayout[index]!.stack"
            >
              <!-- Numbered bubble -->
              <div class="relative flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full gradient-bg font-syne text-[20px] font-bold text-[#04121C] shadow-[0_0_0_8px_rgba(0,180,216,0.13),0_16px_40px_-14px_rgba(0,180,216,0.65)]">
                <span
                  class="pointer-events-none absolute -inset-1.5 animate-[ringPulse_3.6s_ease-out_infinite] rounded-full border border-brand-cyan/30"
                  :style="{ animationDelay: `${index * 0.6}s` }"
                  aria-hidden="true"
                />
                {{ step.n }}
              </div>

              <!-- Info panel -->
              <div
                class="rounded-2xl border border-white/10 bg-[#081224]/90 px-4 py-3 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.9)] backdrop-blur-md"
                :class="ringLayout[index]!.panel"
              >
                <div
                  class="mb-1.5 flex items-center gap-2"
                  :class="ringLayout[index]!.iconAlign"
                >
                  <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-cyan/15 text-brand-cyan">
                    <Icon :name="step.icon" class="h-3.5 w-3.5" />
                  </span>
                  <h3 class="font-syne text-[13.5px] font-semibold leading-snug tracking-tight text-white">
                    {{ step.title }}
                  </h3>
                </div>
                <p class="text-[12px] leading-relaxed text-[#94A6BE]">
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
