<script setup lang="ts">
const { data: servicesDoc } = await useAsyncData('services', () =>
  queryCollection('services').first(),
)
</script>

<template>
  <div class="mx-auto max-w-6xl space-y-6 px-6 py-10">
    <h1 class="font-syne text-3xl font-bold text-brand-dark">Services</h1>
    <p class="text-xs text-brand-gray">
      Loaded {{ servicesDoc?.services?.length ?? 0 }} services
    </p>
    <ServicesGrid />
    <ServicesProcess />
    <ServicesTechStack />
  </div>
</template>
