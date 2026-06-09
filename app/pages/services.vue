<template>
  <div class="overflow-x-hidden">
    <BasePageHero
      breadcrumb="Services"
      heading-light="Our "
      heading-gradient="Services"
      subtitle="End-to-end geospatial and location technology solutions."
    />
    <ServicesGrid />
    <ServicesProcess />
    <ServicesTechStack />
    <HomeCta
      subtitle="Tell us what you need to map, track, or connect — and we'll scope the right solution."
    />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Our Services — Location Technologies',
  description: 'GIS mapping, GPS fleet tracking, geofencing, and location analytics solutions tailored for modern enterprises.',
})
</script>
