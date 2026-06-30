<script setup lang="ts">
const { data } = await useAsyncData('portfolio-grid', () =>
  queryCollection('portfolio').first(),
)

const projects = computed(() =>
  (data.value?.projects ?? []).filter(p => p.published !== false),
)

const categories = [
  { label: 'All', value: 'all' },
  { label: 'SaaS & Web Apps', value: 'saas' },
  { label: 'GIS & Mapping', value: 'mapping' },
  { label: 'Mobile Apps', value: 'mobile' },
  { label: 'E-Commerce', value: 'ecommerce' },
]

const activeFilter = ref('all')

const visibleCount = computed(() =>
  projects.value.filter(p => activeFilter.value === 'all' || p.category === activeFilter.value).length,
)

function isVisible(category: string) {
  return activeFilter.value === 'all' || category === activeFilter.value
}

const categoryIcons: Record<string, string> = {
  saas: 'mdi:cloud-braces',
  mapping: 'mdi:map',
  mobile: 'mdi:cellphone',
  ecommerce: 'mdi:storefront-outline',
}

const categoryLabels: Record<string, string> = {
  saas: 'SaaS & Web Apps',
  mapping: 'GIS & Mapping',
  mobile: 'Mobile Apps',
  ecommerce: 'E-Commerce',
}

const categoryShort: Record<string, string> = {
  saas: 'SaaS',
  mapping: 'GIS',
  mobile: 'Mobile',
  ecommerce: 'E-Commerce',
}

const { openProject } = usePortfolioDialog()

const bgGradients: Record<string, string> = {
  saas: 'bg-saas',
  mapping: 'bg-mapping',
  mobile: 'bg-mobile',
  ecommerce: 'bg-ecommerce',
}
</script>

<template>
  <section class="portfolio relative bg-gradient-to-b from-brand-dark to-[#0B1A2E] py-14 pb-[110px]">
    <div class="mx-auto max-w-[1240px] px-4 sm:px-8">
      <!-- Filter pills -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 26 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        :visible-once="true"
        class="mb-14 flex flex-wrap justify-center gap-3"
      >
        <button
          v-for="cat in categories"
          :key="cat.value"
          type="button"
          class="filter-tab cursor-pointer rounded-full px-6 py-[11px] font-dm text-[15px] font-semibold transition-all duration-250"
          :class="activeFilter === cat.value
            ? 'gradient-bg border-transparent text-[#04121C] shadow-[0_8px_24px_-8px_rgba(0,180,216,0.55)]'
            : 'border border-white/16 bg-transparent text-[#C3D0E0] hover:border-brand-cyan hover:text-white'"
          @click="activeFilter = cat.value"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Project grid -->
      <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(project, i) in projects"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: Math.min(i * 100, 400), duration: 500 } }"
          :visible-once="true"
          class="pcard group flex flex-col overflow-hidden rounded-[20px] border-teal bg-white/[0.025] transition-all duration-400"
          :class="{ 'pcard-hide': !isVisible(project.category) }"
        >
          <div class="pthumb relative h-[220px] overflow-hidden">
            <div
              class="bgfill absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]"
              :class="bgGradients[project.category] ?? bgGradients.saas"
            />
            <div
              class="pattern absolute inset-0 opacity-[0.22]"
              style="background-image: radial-gradient(rgba(255,255,255,0.9) 1.2px, transparent 1.2px); background-size: 22px 22px;"
              aria-hidden="true"
            />
            <div class="big-ic absolute inset-0 flex items-center justify-center">
              <Icon
                :name="categoryIcons[project.category] ?? 'mdi:briefcase'"
                class="h-16 w-16 text-white/90"
              />
            </div>
            <span class="corner-tag absolute top-4 left-4 z-[3] rounded-full border border-white/18 bg-brand-dark/55 px-3 py-1.5 text-[11.5px] font-bold tracking-[0.08em] text-white uppercase backdrop-blur-[6px]">
              {{ categoryShort[project.category] ?? project.category }}
            </span>

            <div class="poverlay absolute inset-0 z-[4] flex flex-col justify-end p-6 opacity-0 transition-opacity duration-350 group-hover:opacity-100">
              <span class="text-xs font-semibold tracking-[0.08em] text-brand-green uppercase">
                {{ categoryLabels[project.category] }}
              </span>
              <span class="ttl mt-1 font-syne text-xl font-bold text-white">
                {{ project.title }}
              </span>
              <button
                type="button"
                class="view-btn mt-3.5 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full gradient-bg px-[18px] py-2.5 font-dm text-sm font-semibold text-[#04121C]"
                @click="openProject(project.slug)"
              >
                View Project
                <Icon name="mdi:arrow-right" class="h-[15px] w-[15px]" />
              </button>
            </div>
          </div>

          <div class="pmeta px-6 pt-[22px] pb-[26px]">
            <span class="chip mb-3.5 inline-block rounded-full border border-brand-cyan/25 bg-brand-cyan/12 px-3 py-1 text-[11.5px] font-bold tracking-[0.06em] text-brand-cyan uppercase">
              {{ categoryShort[project.category] }}
            </span>
            <h3 class="mb-2 font-syne text-[19px] font-bold text-white">
              {{ project.title }}
            </h3>
            <p class="text-[14.5px] leading-[1.55] text-[#94A6BE]">
              {{ project.shortDesc }}
            </p>
            <div
              v-if="project.highlights?.length"
              class="mt-3.5 flex flex-wrap gap-2"
            >
              <span
                v-for="highlight in project.highlights.slice(0, 2)"
                :key="highlight"
                class="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] leading-snug text-[#C3D0E0]"
              >
                {{ highlight.length > 48 ? `${highlight.slice(0, 45)}…` : highlight }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <p
        v-if="visibleCount === 0"
        class="py-[60px] text-center text-[16px] text-[#94A6BE]"
      >
        No projects in this category yet.
      </p>
    </div>
  </section>
</template>

<style scoped>
.bg-saas {
  background: linear-gradient(135deg, #00B4D8 0%, #0a7d9c 100%);
}

.bg-mapping {
  background: linear-gradient(135deg, #00C896 0%, #0a7d63 100%);
}

.bg-mobile {
  background: linear-gradient(135deg, #16314f 0%, #0A1628 100%);
}

.bg-ecommerce {
  background: linear-gradient(135deg, #0a7d9c 0%, #00C896 100%);
}

.poverlay {
  background: linear-gradient(180deg, rgba(10, 22, 40, 0) 30%, rgba(6, 14, 26, 0.92) 100%);
}

.pcard:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 180, 216, 0.4);
  box-shadow: 0 30px 64px -30px rgba(0, 180, 216, 0.5);
}

.pcard-hide {
  display: none;
}
</style>
