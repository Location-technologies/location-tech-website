<template>
  <div class="overflow-x-hidden">
    <BasePageHero
      breadcrumb="Portfolio"
      heading-light="Our "
      heading-gradient="Work"
      subtitle="Real projects. Real impact. Across industries and geographies."
    />
    <PortfolioGrid />
    <PortfolioCaseStudy />
    <HomeCta
      title="Have a project in mind?"
      subtitle="From a single map to a city-wide tracking platform — let's scope what you need to build."
      button-text="Let's Talk"
    />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Our Work — Location Technologies',
  description: 'Explore our portfolio of GIS, fleet tracking, geofencing, and location analytics projects across Pakistan.',
})
</script>
