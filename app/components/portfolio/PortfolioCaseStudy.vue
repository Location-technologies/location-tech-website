<script setup lang="ts">
const { data } = await useAsyncData('portfolio-case-study', () =>
  queryCollection('portfolio').first(),
)

const featuredProjects = computed(() =>
  (data.value?.projects ?? []).filter(p => p.featured && p.published !== false),
)

const activeIndex = ref(0)
const prefersReducedMotion = usePreferredReducedMotion()

const activeProject = computed(() => featuredProjects.value[activeIndex.value])

function goTo(index: number) {
  if (featuredProjects.value.length === 0) return
  activeIndex.value = ((index % featuredProjects.value.length) + featuredProjects.value.length) % featuredProjects.value.length
}

function next() {
  goTo(activeIndex.value + 1)
}

function prev() {
  goTo(activeIndex.value - 1)
}

let interval: ReturnType<typeof setInterval> | undefined

function startAutoplay() {
  if (prefersReducedMotion.value || featuredProjects.value.length <= 1) return
  interval = setInterval(next, 7000)
}

function stopAutoplay() {
  if (interval) {
    clearInterval(interval)
    interval = undefined
  }
}

onMounted(startAutoplay)
onUnmounted(stopAutoplay)

watch(prefersReducedMotion, (reduced) => {
  if (reduced) stopAutoplay()
  else startAutoplay()
})

const { el: copyEl, isVisible: copyVisible } = useScrollReveal()
const { el: visualEl, isVisible: visualVisible } = useScrollReveal()

const { openProject } = usePortfolioDialog()

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

const highlightIcons = [
  'mdi:lightning-bolt',
  'mdi:layers-triple',
  'mdi:shield-check',
]

const statusLabels: Record<string, string> = {
  shipped: 'Shipped',
  'in-progress': 'In Progress',
  foundation: 'Foundation',
}

const statusColors: Record<string, string> = {
  shipped: 'text-brand-green border-brand-green/30 bg-brand-green/10',
  'in-progress': 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
  foundation: 'text-amber-300 border-amber-400/30 bg-amber-400/10',
}

function highlightItems(project: NonNullable<typeof activeProject.value>) {
  if (project.highlights?.length) {
    return project.highlights.slice(0, 3)
  }
  return []
}
</script>

<template>
  <section
    v-if="activeProject"
    class="case relative overflow-hidden bg-[#081120] py-16 sm:py-20 lg:py-28"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Ambient glows -->
    <div
      class="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-brand-cyan/10 blur-[100px]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-brand-green/8 blur-[80px]"
      aria-hidden="true"
    />

    <div class="relative z-[2] mx-auto max-w-[1240px] px-4 sm:px-8">
      <!-- Section header -->
      <div class="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div class="mb-3 flex items-center gap-3">
            <span class="font-syne text-5xl font-extrabold leading-none gradient-text-hero sm:text-6xl">
              {{ String(activeIndex + 1).padStart(2, '0') }}
            </span>
            <span class="rounded-full border border-brand-cyan/25 bg-brand-cyan/8 px-3.5 py-1.5 font-dm text-[11px] font-semibold tracking-[0.16em] text-brand-cyan uppercase">
              Featured Project
            </span>
          </div>
          <p class="max-w-md text-[15px] leading-relaxed text-[#7A8FA8]">
            A closer look at platforms we've designed and shipped end-to-end.
          </p>
        </div>

        <!-- Carousel controls — desktop -->
        <div
          v-if="featuredProjects.length > 1"
          class="hidden items-center gap-3 sm:flex"
        >
          <button
            v-for="(proj, i) in featuredProjects"
            :key="proj.slug"
            type="button"
            class="cursor-pointer rounded-full px-4 py-2 font-dm text-[13px] font-semibold transition-all duration-300"
            :class="i === activeIndex
              ? 'gradient-bg text-[#04121C] shadow-[0_6px_20px_-6px_rgba(0,180,216,0.6)]'
              : 'border border-white/12 text-[#94A6BE] hover:border-brand-cyan/40 hover:text-white'"
            @click="goTo(i)"
          >
            {{ proj.title }}
          </button>
        </div>
      </div>

      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <!-- Visual — shows first on mobile -->
        <div
          ref="visualEl"
          :class="[
            'case-visual order-1 lg:order-2 transition-all duration-700 delay-100',
            visualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
        >
          <Transition name="case-slide" mode="out-in">
            <div
              :key="activeProject.slug"
              class="visual-card group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-brand-cyan/30 shadow-[0_0_80px_-20px_rgba(0,180,216,0.5)] sm:aspect-[5/4] lg:aspect-auto lg:h-[460px]"
            >
              <!-- Gradient background -->
              <div
                class="visual-bg absolute inset-0 transition-all duration-700"
                :class="`visual-bg--${activeProject.category}`"
              />
              <div
                class="absolute inset-0 opacity-20"
                style="background-image: radial-gradient(rgba(255,255,255,0.85) 1px, transparent 1px); background-size: 24px 24px;"
                aria-hidden="true"
              />

              <!-- Decorative rings -->
              <div class="pointer-events-none absolute top-1/2 left-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" aria-hidden="true" />
              <div class="pointer-events-none absolute top-1/2 left-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" aria-hidden="true" />

              <!-- Center icon -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm sm:h-28 sm:w-28">
                  <Icon
                    :name="categoryIcons[activeProject.category] ?? 'mdi:briefcase'"
                    class="h-12 w-12 text-white/80 sm:h-14 sm:w-14"
                  />
                </div>
              </div>

              <!-- Floating tech chips -->
              <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
                <span
                  v-for="(tech, i) in activeProject.technologies.slice(0, 5)"
                  :key="tech"
                  class="tech-float absolute rounded-full border border-white/15 bg-brand-dark/60 px-3 py-1 font-dm text-[11px] font-medium text-white/80 backdrop-blur-sm"
                  :style="{
                    top: `${12 + (i * 17) % 55}%`,
                    left: i % 2 === 0 ? `${8 + (i * 11) % 20}%` : 'auto',
                    right: i % 2 !== 0 ? `${6 + (i * 9) % 18}%` : 'auto',
                    animationDelay: `${i * 0.4}s`,
                  }"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Bottom meta pill -->
              <div class="absolute inset-x-4 bottom-4 z-[3] flex flex-wrap items-center justify-between gap-2 sm:inset-x-5 sm:bottom-5">
                <div class="flex items-center gap-2.5 rounded-2xl border border-brand-cyan/25 bg-brand-dark/80 px-4 py-2.5 backdrop-blur-md">
                  <span class="h-2 w-2 shrink-0 rounded-full bg-brand-green shadow-[0_0_8px_#00C896]" />
                  <span class="font-syne text-sm font-bold text-white">{{ activeProject.client }}</span>
                  <span class="text-white/30">·</span>
                  <span class="font-dm text-xs text-[#94A6BE]">{{ activeProject.year }}</span>
                </div>
                <span
                  v-if="activeProject.status"
                  class="rounded-full border px-3 py-1.5 font-dm text-[10.5px] font-bold tracking-[0.06em] uppercase backdrop-blur-md"
                  :class="statusColors[activeProject.status]"
                >
                  {{ statusLabels[activeProject.status] }}
                </span>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Copy -->
        <div
          ref="copyEl"
          :class="[
            'case-copy order-2 lg:order-1 transition-all duration-700',
            copyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
        >
          <Transition name="case-slide" mode="out-in">
            <div :key="activeProject.slug">
              <span class="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-dm text-[11px] font-semibold tracking-[0.08em] text-[#94A6BE] uppercase">
                {{ categoryLabels[activeProject.category] ?? activeProject.category }}
              </span>

              <h2 class="font-syne text-[clamp(1.875rem,4.5vw,2.75rem)] font-extrabold leading-[1.1] text-white">
                {{ activeProject.title }}
              </h2>

              <p class="mt-4 text-[16px] leading-[1.75] text-[#94A6BE] sm:mt-5 sm:text-[17px]">
                {{ activeProject.shortDesc }}
              </p>

              <!-- Highlight cards — fixed clipping -->
              <ul
                v-if="highlightItems(activeProject).length"
                class="mt-8 grid gap-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
              >
                <li
                  v-for="(highlight, i) in highlightItems(activeProject)"
                  :key="highlight"
                  class="highlight-card flex items-start gap-3.5 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-brand-cyan/25 hover:bg-white/[0.05] sm:p-5"
                >
                  <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand-cyan/20 bg-brand-cyan/10">
                    <Icon :name="highlightIcons[i] ?? 'mdi:star-four-points'" class="h-4 w-4 text-brand-cyan" />
                  </span>
                  <p class="pt-1 text-[14px] leading-[1.65] text-[#C3D0E0] sm:text-[15px]">
                    {{ highlight }}
                  </p>
                </li>
              </ul>

              <!-- Actions -->
              <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  type="button"
                  class="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full gradient-bg px-6 py-3.5 font-dm text-[15px] font-semibold text-[#04121C] shadow-[0_8px_28px_-8px_rgba(0,180,216,0.55)] transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
                  @click="openProject(activeProject.slug)"
                >
                  View full case study
                  <Icon name="mdi:arrow-right" class="h-[18px] w-[18px]" />
                </button>

                <div
                  v-if="featuredProjects.length > 1"
                  class="flex items-center justify-between gap-3 sm:justify-start"
                >
                  <button
                    type="button"
                    class="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/14 bg-white/[0.03] text-[#C3D0E0] transition-all duration-300 hover:border-brand-cyan hover:bg-brand-cyan/10 hover:text-white"
                    aria-label="Previous featured project"
                    @click="prev"
                  >
                    <Icon name="mdi:chevron-left" class="h-5 w-5" />
                  </button>

                  <!-- Mobile dots -->
                  <div class="flex flex-1 justify-center gap-2 sm:hidden">
                    <button
                      v-for="(proj, i) in featuredProjects"
                      :key="proj.slug"
                      type="button"
                      class="h-2 cursor-pointer rounded-full transition-all duration-300"
                      :class="i === activeIndex ? 'w-8 bg-brand-cyan' : 'w-2 bg-white/25'"
                      :aria-label="`Go to ${proj.title}`"
                      @click="goTo(i)"
                    />
                  </div>

                  <button
                    type="button"
                    class="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/14 bg-white/[0.03] text-[#C3D0E0] transition-all duration-300 hover:border-brand-cyan hover:bg-brand-cyan/10 hover:text-white"
                    aria-label="Next featured project"
                    @click="next"
                  >
                    <Icon name="mdi:chevron-right" class="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.visual-bg--saas {
  background: linear-gradient(145deg, #00B4D8 0%, #067a96 55%, #0A1628 100%);
}

.visual-bg--mapping {
  background: linear-gradient(145deg, #00C896 0%, #067a5e 55%, #0A1628 100%);
}

.visual-bg--mobile {
  background: linear-gradient(145deg, #1a4a6e 0%, #0c2840 55%, #0A1628 100%);
}

.visual-bg--ecommerce {
  background: linear-gradient(145deg, #0a7d9c 0%, #00C896 50%, #0A1628 100%);
}

.tech-float {
  animation: techFloat 5s ease-in-out infinite;
}

@keyframes techFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.case-slide-enter-active,
.case-slide-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.case-slide-enter-from {
  opacity: 0;
  transform: translateX(12px);
}

.case-slide-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}

@media (prefers-reduced-motion: reduce) {
  .tech-float {
    animation: none;
  }

  .case-slide-enter-active,
  .case-slide-leave-active {
    transition: opacity 0.2s ease;
  }

  .case-slide-enter-from,
  .case-slide-leave-to {
    transform: none;
  }
}
</style>
