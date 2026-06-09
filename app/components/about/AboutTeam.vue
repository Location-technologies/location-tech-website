<script setup lang="ts">
const team = [
  {
    name: 'Ahmed Raza',
    role: 'Founder & CEO',
    bio: 'Geospatial strategist driving the company\'s mission across Pakistan and the GCC.',
    linkedin: 'https://www.linkedin.com/in/',
    twitter: 'https://twitter.com/',
  },
  {
    name: 'Sara Khan',
    role: 'Head of GIS',
    bio: 'Leads spatial data and mapping, turning raw coordinates into clear insight.',
    linkedin: 'https://www.linkedin.com/in/',
    twitter: 'https://twitter.com/',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Lead Engineer',
    bio: 'Architects the real-time tracking and geofencing platforms behind every deployment.',
    linkedin: 'https://www.linkedin.com/in/',
    twitter: 'https://twitter.com/',
  },
  {
    name: 'Ayesha Malik',
    role: 'Client Success',
    bio: 'Ensures every deployment runs smoothly with 24/7 monitoring and support.',
    linkedin: 'https://www.linkedin.com/in/',
    twitter: 'https://twitter.com/',
  },
]
</script>

<template>
  <section class="bg-brand-dark py-[110px]">
    <div class="mx-auto max-w-[1240px] px-4 sm:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 26 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        :visible-once="true"
        class="mx-auto mb-16 max-w-[640px] text-center"
      >
        <span class="block font-dm text-[13px] font-semibold tracking-[0.18em] text-brand-cyan uppercase">People</span>
        <h2 class="mt-3.5 inline-block font-syne text-[clamp(2.125rem,4vw,3rem)] font-extrabold text-white">
          Meet the Team
          <span class="underline-grad" />
        </h2>
        <p class="mt-5 text-[17px] leading-relaxed text-[#94A6BE]">
          The surveyors, engineers, and strategists mapping Pakistan's location-tech future.
        </p>
      </div>

      <div class="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(member, index) in team"
          :key="member.name"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          :visible-once="true"
          class="rounded-[20px] bg-white/[0.97] px-[26px] py-[34px] pb-7 text-center shadow-[0_24px_50px_-28px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_34px_64px_-28px_rgba(0,180,216,0.45)]"
        >
          <div class="mx-auto mb-5 flex h-[104px] w-[104px] items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-[#d4eef2] to-[#e6f7f3] shadow-[0_0_0_3px_rgba(0,180,216,0.18)]">
            <Icon name="mdi:account-outline" class="h-[52px] w-[52px] text-[#8fb4bd]" />
          </div>
          <h3 class="font-syne text-xl font-bold text-brand-dark">
            {{ member.name }}
          </h3>
          <div class="mt-1 text-sm font-semibold text-[#0096b4]">
            {{ member.role }}
          </div>
          <p class="my-3.5 text-[13.5px] leading-snug text-[#6b7a8c]">
            {{ member.bio }}
          </p>
          <div class="inline-flex gap-2.5">
            <a
              :href="member.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#eef6f7] transition-all hover:-translate-y-0.5 hover:gradient-bg"
              :aria-label="`${member.name} on LinkedIn`"
            >
              <Icon name="mdi:linkedin" class="h-[17px] w-[17px] text-[#5b8290] group-hover:text-[#04121C]" />
            </a>
            <a
              :href="member.twitter"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#eef6f7] transition-all hover:-translate-y-0.5 hover:gradient-bg"
              :aria-label="`${member.name} on Twitter`"
            >
              <Icon name="mdi:twitter" class="h-[17px] w-[17px] text-[#5b8290]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
