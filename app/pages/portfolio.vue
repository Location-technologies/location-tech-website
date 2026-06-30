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
    <PortfolioProjectDialog />
    <HomeCta
      title="Have a project in mind?"
      subtitle="From SaaS platforms to geospatial tools — let's scope what you need to build."
      button-text="Let's Talk"
    />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Our Work — Location Technologies',
  description: 'Explore our portfolio of SaaS platforms, geospatial tools, and full-stack applications built by Location Technologies.',
})
</script>
