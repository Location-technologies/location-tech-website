<script setup lang="ts">
const milestones = [
  {
    year: '2019',
    title: 'Founded',
    description: 'Established in Rawalpindi with a focus on GIS and mapping for local enterprises.',
    alt: false,
  },
  {
    year: '2020',
    title: 'First Major Contract',
    description: 'Delivered a fleet-wide GPS tracking deployment for a national logistics operator.',
    alt: true,
  },
  {
    year: '2022',
    title: 'Expanded to GCC',
    description: 'Opened cross-border projects across the Gulf, bringing geofencing to new markets.',
    alt: false,
  },
  {
    year: '2024',
    title: '50+ Projects',
    description: 'Crossed fifty delivered projects across more than ten industries.',
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
            Location Technologies was founded with a single mission — to bring <strong class="font-semibold text-[#DCE7F2]">enterprise-grade geospatial intelligence</strong> to Pakistani businesses. From Rawalpindi to the Gulf, our solutions have mapped, tracked, and connected industries.
          </p>
          <p class="mt-[18px] text-[16.5px] leading-[1.75] text-[#94A6BE]">
            What began as a small team of surveyors and software engineers has grown into a full-service location technology partner, trusted by logistics fleets, public-sector agencies, and enterprises that depend on knowing exactly where things are — in real time.
          </p>
          <p class="mt-[18px] text-[16.5px] leading-[1.75] text-[#94A6BE]">
            We build the systems that turn raw coordinates into confident decisions: spatial databases, live tracking dashboards, and automated geofencing that works reliably across challenging terrain and infrastructure.
          </p>
          <p class="mt-[18px] text-[16.5px] leading-[1.75] text-[#94A6BE]">
            Today, our work spans more than ten industries and a growing footprint across the GCC — but our principle hasn't changed: precision you can build on.
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
            :key="milestone.year"
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
