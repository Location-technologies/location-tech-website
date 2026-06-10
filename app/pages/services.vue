<template>
  <div class="overflow-x-hidden">
    <BasePageHero
      breadcrumb="Services"
      heading-light="Our "
      heading-gradient="Services"
      subtitle="From GIS platforms and SaaS products to AI systems and cloud infrastructure — full-stack software built to scale."
    />
    <ServicesGrid />
    <ServicesProcess />
    <ServicesTechStack />
    <HomeCta
      subtitle="Tell us what you're building — and we'll scope the right solution."
    />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Our Services — Location Technologies',
  description: 'GIS mapping, SaaS platforms, legacy modernization, AI systems, e-commerce, and DevOps — built for modern enterprises.',
})
</script>
