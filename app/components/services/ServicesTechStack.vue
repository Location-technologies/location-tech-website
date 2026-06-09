<script setup lang="ts">
const technologies = [
  { name: 'QGIS', glyph: 'Q' },
  { name: 'ArcGIS', glyph: 'A' },
  { name: 'PostGIS', glyph: 'PG' },
  { name: 'Mapbox', glyph: 'M' },
  { name: 'OpenLayers', glyph: 'OL' },
  { name: 'Google Maps API', glyph: 'G' },
  { name: 'Python', glyph: 'Py' },
  { name: 'PostgreSQL', glyph: 'SQL' },
]
</script>

<template>
  <section class="tech bg-[#F0FAFA] py-[110px]">
    <div class="mx-auto max-w-[1240px] px-4 sm:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 26 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        :visible-once="true"
        class="mx-auto mb-16 max-w-[640px] text-center"
      >
        <span class="block font-dm text-[13px] font-semibold tracking-[0.18em] text-[#0090ad] uppercase">Our Toolkit</span>
        <h2 class="mt-3.5 inline-block font-syne text-[clamp(2.125rem,4vw,3rem)] font-extrabold text-brand-dark">
          Technologies We Use
          <span class="underline-grad" />
        </h2>
        <p class="mt-5 text-[17px] leading-[1.6] text-[#5b6b7e]">
          Best-in-class geospatial and engineering tools, chosen to fit each project precisely.
        </p>
      </div>

      <div class="tech-grid grid grid-cols-2 gap-5 min-[981px]:grid-cols-4">
        <div
          v-for="(tech, index) in technologies"
          :key="tech.name"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 60 } }"
          :visible-once="true"
          class="tech-chip group flex flex-col items-center gap-3.5 rounded-2xl border border-[#e2eef0] bg-white px-[22px] py-[30px] text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-cyan/35 hover:shadow-[0_22px_44px_-24px_rgba(0,150,180,0.4)]"
        >
          <span class="glyph flex h-[52px] w-[52px] items-center justify-center rounded-[13px] bg-[#eef3f5] font-syne text-xl font-extrabold text-[#8a9aa8] grayscale transition-all duration-350 group-hover:grayscale-0 group-hover:gradient-bg group-hover:text-white group-hover:shadow-[0_10px_24px_-10px_rgba(0,180,216,0.6)]">
            {{ tech.glyph }}
          </span>
          <span class="name text-[15px] font-semibold text-[#7a8a99] transition-colors group-hover:text-brand-dark">
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
