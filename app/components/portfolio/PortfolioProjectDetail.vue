<script setup lang="ts">
import type { PortfolioProject } from '~/composables/usePortfolioDialog'

type DeliverableStatus = 'shipped' | 'in-progress' | 'foundation'

const props = defineProps<{
  project: PortfolioProject
}>()

const paragraphs = computed(() => props.project.description.split('\n\n').filter(Boolean))

const statusLabels: Record<string, string> = {
  shipped: 'Shipped',
  'in-progress': 'In Progress',
  foundation: 'Foundation',
}

const statusColors: Record<DeliverableStatus, string> = {
  shipped: 'border-brand-green/30 bg-brand-green/12 text-brand-green',
  'in-progress': 'border-brand-cyan/30 bg-brand-cyan/12 text-brand-cyan',
  foundation: 'border-amber-400/30 bg-amber-400/12 text-amber-300',
}

const categoryLabels: Record<string, string> = {
  saas: 'SaaS & Web Apps',
  mapping: 'GIS & Mapping',
  mobile: 'Mobile Apps',
  ecommerce: 'E-Commerce',
}
</script>

<template>
  <div class="space-y-10">
    <div class="flex flex-wrap items-center gap-3">
      <span class="rounded-full border border-brand-cyan/25 bg-brand-cyan/12 px-3 py-1 text-[11.5px] font-bold tracking-[0.06em] text-brand-cyan uppercase">
        {{ categoryLabels[project.category] ?? project.category }}
      </span>
      <span
        v-if="project.status"
        class="rounded-full border px-3 py-1 text-[11.5px] font-bold tracking-[0.06em] uppercase"
        :class="statusColors[project.status as DeliverableStatus]"
      >
        {{ statusLabels[project.status] }}
      </span>
      <span class="text-sm text-[#94A6BE]">{{ project.year }} · {{ project.client }}</span>
    </div>

    <div>
      <h2 class="font-syne text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.1] text-white">
        {{ project.title }}
      </h2>
      <p class="mt-4 text-[16.5px] leading-[1.65] text-[#94A6BE]">
        {{ project.shortDesc }}
      </p>
    </div>

    <div>
      <h3 class="mb-4 font-syne text-xl font-bold text-white">
        Overview
      </h3>
      <div class="space-y-4">
        <p
          v-for="(para, i) in paragraphs"
          :key="i"
          class="text-[15.5px] leading-[1.75] text-[#94A6BE]"
        >
          {{ para }}
        </p>
      </div>
    </div>

    <div v-if="project.highlights?.length">
      <h3 class="mb-4 font-syne text-xl font-bold text-white">
        Key Features
      </h3>
      <ul class="space-y-3">
        <li
          v-for="(item, i) in project.highlights"
          :key="i"
          class="flex items-start gap-3 text-[15px] leading-[1.6] text-[#94A6BE]"
        >
          <Icon name="mdi:check-circle" class="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
          {{ item }}
        </li>
      </ul>
    </div>

    <div v-if="project.deliverables?.length">
      <h3 class="mb-4 font-syne text-xl font-bold text-white">
        Deliverables
      </h3>
      <div class="grid gap-3 sm:grid-cols-2">
        <div
          v-for="(d, i) in project.deliverables"
          :key="i"
          class="rounded-2xl border-teal bg-white/[0.025] p-4"
        >
          <div class="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h4 class="font-syne text-[16px] font-bold text-white">
              {{ d.name }}
            </h4>
            <span
              v-if="d.status"
              class="rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-[0.06em] uppercase"
              :class="statusColors[d.status as DeliverableStatus]"
            >
              {{ statusLabels[d.status] }}
            </span>
          </div>
          <p class="text-[13.5px] leading-[1.55] text-[#94A6BE]">
            {{ d.stack }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="project.roadmap?.length">
      <h3 class="mb-1 font-syne text-xl font-bold text-white">
        Roadmap
      </h3>
      <p class="mb-4 text-sm text-[#7A8FA8]">
        Planned features — not yet shipped
      </p>
      <ul class="space-y-2.5">
        <li
          v-for="(item, i) in project.roadmap"
          :key="i"
          class="flex items-start gap-3 text-[14.5px] leading-[1.6] text-[#94A6BE]"
        >
          <Icon name="mdi:clock-outline" class="mt-0.5 h-5 w-5 shrink-0 text-amber-300/80" />
          {{ item }}
        </li>
      </ul>
    </div>

    <div>
      <h3 class="mb-3 font-syne text-xl font-bold text-white">
        Technologies
      </h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[12.5px] font-medium text-[#C3D0E0]"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
