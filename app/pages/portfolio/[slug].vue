<script setup lang="ts">
import type { PortfolioProject } from '~/composables/usePortfolioDialog'

const route = useRoute()
const slug = route.params.slug as string

const { data } = await useAsyncData(`portfolio-${slug}`, () =>
  queryCollection('portfolio').first(),
)

const project = data.value?.projects.find(
  p => p.slug === slug && p.published !== false,
) as PortfolioProject | undefined

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useSeoMeta({
  title: `${project.title} — Location Technologies`,
  description: project.shortDesc,
})
</script>

<template>
  <div class="overflow-x-hidden bg-brand-dark">
    <section class="relative overflow-hidden py-[130px] pb-[70px]">
      <div
        class="pointer-events-none absolute top-[-120px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-cyan/14 blur-[90px]"
        aria-hidden="true"
      />

      <div class="relative z-10 mx-auto max-w-[820px] px-4 sm:px-8">
        <nav class="mb-6 flex items-center gap-2.5 text-sm text-[#94A6BE]">
          <NuxtLink to="/" class="transition-colors hover:text-brand-cyan">Home</NuxtLink>
          <span class="text-white/25">›</span>
          <NuxtLink to="/portfolio" class="transition-colors hover:text-brand-cyan">Portfolio</NuxtLink>
          <span class="text-white/25">›</span>
          <span class="text-brand-cyan">{{ project.title }}</span>
        </nav>

        <PortfolioProjectDetail :project="project" />

        <div class="mt-12 flex flex-wrap gap-3">
          <NuxtLink
            to="/portfolio"
            class="inline-flex items-center gap-2 rounded-full border border-white/16 px-5 py-3 font-dm text-sm font-semibold text-[#C3D0E0] transition-colors hover:border-brand-cyan hover:text-white"
          >
            <Icon name="mdi:arrow-left" class="h-4 w-4" />
            Back to Portfolio
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 rounded-full gradient-bg px-5 py-3 font-dm text-sm font-semibold text-[#04121C]"
          >
            Let's Talk
            <Icon name="mdi:arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
