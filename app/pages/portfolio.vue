<script setup lang="ts">
const { data: portfolioDoc } = await useAsyncData('portfolio', () =>
  queryCollection('portfolio').first(),
)
</script>

<template>
  <div class="mx-auto max-w-6xl space-y-6 px-6 py-10">
    <h1 class="font-syne text-3xl font-bold text-brand-dark">Portfolio</h1>
    <p class="text-xs text-brand-gray">
      Loaded {{ portfolioDoc?.projects?.length ?? 0 }} projects
    </p>
    <PortfolioFilter />
    <PortfolioGrid />
    <PortfolioCaseStudy />
  </div>
</template>
