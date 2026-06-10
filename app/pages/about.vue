<template>
  <div class="overflow-x-hidden">
    <BasePageHero
      breadcrumb="About"
      heading-light="About "
      heading-gradient="Us"
      subtitle="The story behind Pakistan's precision location experts."
    />
    <AboutStory />
    <AboutMissionVision />
    <AboutValues />
    <AboutTeam />
    <HomeCta />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Us — Location Technologies',
  description: 'Learn about Location Technologies — Pakistan\'s precision location experts delivering GIS, GPS tracking, and geofencing solutions. Meet our leadership and engineering team.',
})
</script>
