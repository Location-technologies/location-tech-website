<script setup lang="ts">
const steps = [
  { n: '1', title: 'Requirement Analysis', desc: 'We map your goals, data, and constraints to define exactly what success looks like.' },
  { n: '2', title: 'System Design', desc: 'We architect the solution — data models, integrations, and dashboards built to scale.' },
  { n: '3', title: 'Development & Testing', desc: 'We build and rigorously test for accuracy, reliability, and real-world field conditions.' },
  { n: '4', title: 'Deployment & Support', desc: 'We launch, train your team, and provide 24/7 monitoring and ongoing support.' },
]
</script>

<template>
  <section class="process relative overflow-hidden bg-gradient-to-b from-brand-dark to-[#0B1A2E] py-[110px]">
    <div class="dot-layer opacity-[0.04]" aria-hidden="true" />
    <div class="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-8">
      <BaseSectionHeader
        centered
        eyebrow="Our Process"
        subtitle="A clear, proven path from first conversation to live deployment — and support that doesn't stop there."
        class="relative z-[2] mx-auto mb-16 max-w-[640px] [&_h2]:inline-block [&_h2]:text-white [&_p]:text-[#94A6BE]"
      >
        How We Work<span class="underline-grad" />
      </BaseSectionHeader>

      <div class="steps relative z-[2] grid grid-cols-1 gap-11 min-[561px]:grid-cols-2 min-[561px]:gap-x-6 min-[561px]:gap-y-11 min-[981px]:grid-cols-4 min-[981px]:gap-6">
        <div
          class="steps-line pointer-events-none absolute top-[33px] right-[12%] left-[12%] hidden h-0.5 bg-gradient-to-r from-brand-cyan to-brand-green opacity-50 min-[981px]:block"
          aria-hidden="true"
        />
        <div
          v-for="(step, index) in steps"
          :key="step.n"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: Math.min(index * 100, 400) } }"
          :visible-once="true"
          class="step relative z-[2] px-2 text-center"
        >
          <div class="step-bubble mx-auto mb-6 flex h-[66px] w-[66px] items-center justify-center rounded-full gradient-bg font-syne text-[26px] font-extrabold text-[#04121C] shadow-[0_0_0_8px_rgba(0,180,216,0.10),0_12px_30px_-10px_rgba(0,180,216,0.6)]">
            {{ step.n }}
          </div>
          <h3 class="mb-2.5 font-syne text-xl font-bold text-white">
            {{ step.title }}
          </h3>
          <p class="text-[14.5px] leading-[1.55] text-[#94A6BE]">
            {{ step.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
