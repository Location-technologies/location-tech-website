<script setup lang="ts">
const milestones = [
  {
    year: '2023',
    title: 'Founded',
    description: 'Location Technologies was established on 14 November 2023, starting with GIS, web mapping, and full-stack development for regional clients.',
    alt: false,
  },
  {
    year: '2024',
    title: 'First Deliveries',
    description: 'Delivered our first set of client projects — SaaS platforms, mapping tools, and web applications — building a strong reputation for quality and precision.',
    alt: true,
  },
  {
    year: '2024',
    title: 'Expanded Services',
    description: 'Grew offerings to include legacy system modernization, AI-driven systems, WordPress/Shopify development, and DevOps infrastructure.',
    alt: false,
  },
  {
    year: '2025',
    title: 'Growing Portfolio',
    description: 'Active delivery across SaaS, GIS, e-commerce, real estate, and travel verticals. Building a growing client base in Pakistan and internationally.',
    alt: true,
  },
]

const { el: storyEl, isVisible: storyVisible } = useScrollReveal()
const { el: timelineEl, isVisible: timelineVisible } = useScrollReveal()
</script>

<template>
  <section class="relative py-[110px]">
    <div class="mx-auto max-w-[1240px] px-4 sm:px-8">
      <div class="grid items-start gap-12 lg:grid-cols-2 lg:gap-[72px]">
        <div
          ref="storyEl"
          :class="[
            'transition-all duration-700',
            storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
        >
          <div class="font-syne text-[22px] font-extrabold tracking-[0.1em] text-brand-cyan">
            01
          </div>
          <h2 class="mt-2.5 font-syne text-[clamp(2.125rem,4vw,3.125rem)] font-extrabold leading-[1.05] text-white">
            Our Story
          </h2>
          <p class="mt-7 text-[16.5px] leading-[1.75] text-[#94A6BE]">
            Location Technologies was founded on <strong class="font-semibold text-[#DCE7F2]">14 November 2023</strong> with
            one mission — to build high-quality, scalable software for businesses that demand precision and reliability.
          </p>
          <p class="mt-[18px] text-[16.5px] leading-[1.75] text-[#94A6BE]">
            We are a full-service software development company covering SaaS and PaaS platforms, geographic information
            systems, legacy system modernization, AI-driven applications, WordPress and Shopify websites, and DevOps
            infrastructure — all under one roof.
          </p>
          <p class="mt-[18px] text-[16.5px] leading-[1.75] text-[#94A6BE]">
            In a short time, we have delivered projects across diverse domains — sports SaaS platforms, travel planning apps,
            real estate marketing systems, interactive map builders, and e-commerce platforms — always with a commitment
            to clean code and production-ready results.
          </p>
          <p class="mt-[18px] text-[16.5px] leading-[1.75] text-[#94A6BE]">
            Today we are actively expanding our portfolio and client base within Pakistan and internationally, with a team
            that brings deep technical expertise and a strong understanding of real-world business requirements.
          </p>
        </div>

        <div
          ref="timelineEl"
          :class="[
            'relative pl-10 transition-all duration-700 delay-150',
            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
        >
          <div
            class="absolute top-1.5 bottom-1.5 left-[9px] w-0.5 rounded-sm bg-gradient-to-b from-brand-cyan to-brand-green"
            aria-hidden="true"
          />
          <div
            v-for="(milestone, index) in milestones"
            :key="`${milestone.year}-${milestone.title}`"
            class="relative pb-[38px] last:pb-0"
          >
            <div
              class="absolute -left-10 top-1 h-5 w-5 rounded-full bg-brand-dark"
              :class="milestone.alt
                ? 'border-[3px] border-brand-green shadow-[0_0_0_5px_rgba(0,200,150,0.12)]'
                : 'border-[3px] border-brand-cyan shadow-[0_0_0_5px_rgba(0,180,216,0.12)]'"
              aria-hidden="true"
            />
            <div
              class="font-syne text-[26px] font-extrabold"
              :class="milestone.alt ? 'text-brand-green' : 'text-brand-cyan'"
            >
              {{ milestone.year }}
            </div>
            <div class="mt-1 text-base font-semibold text-[#E6EDF6]">
              {{ milestone.title }}
            </div>
            <p class="mt-1.5 text-[14.5px] leading-[1.55] text-[#94A6BE]">
              {{ milestone.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
