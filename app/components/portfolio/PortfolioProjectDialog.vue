<script setup lang="ts">
import type { PortfolioProject } from '~/composables/usePortfolioDialog'

const { isOpen, selectedSlug, close } = usePortfolioDialog()

const { data } = await useAsyncData('portfolio-dialog', () =>
  queryCollection('portfolio').first(),
)

const project = computed<PortfolioProject | null>(() => {
  if (!selectedSlug.value || !data.value) return null
  return data.value.projects.find(
    p => p.slug === selectedSlug.value && p.published !== false,
  ) ?? null
})

const scrollLock = useScrollLock(import.meta.client ? document.body : undefined)

watch(isOpen, (open) => {
  scrollLock.value = open
})

onKeyStroke('Escape', () => {
  if (isOpen.value) close()
})

function onBackdropClick(e: MouseEvent) {
  if (e.target === e.currentTarget) close()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        v-if="isOpen && project"
        class="dialog-root fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-6"
        role="presentation"
        @click="onBackdropClick"
      >
        <div
          class="dialog-backdrop absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div
          role="dialog"
          aria-modal="true"
          :aria-label="`${project.title} case study`"
          class="dialog-panel relative z-[1] flex max-h-[92vh] w-full max-w-[820px] flex-col overflow-hidden rounded-t-[24px] border border-brand-cyan/25 bg-[#081120] shadow-[0_40px_100px_-20px_rgba(0,180,216,0.35)] sm:rounded-[24px]"
          @click.stop
        >
          <div class="flex shrink-0 items-center justify-between border-b border-white/8 px-5 py-4 sm:px-7">
            <span class="font-dm text-[13px] font-semibold tracking-[0.14em] text-brand-cyan uppercase">
              Case Study
            </span>
            <button
              type="button"
              class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/16 text-[#C3D0E0] transition-colors hover:border-brand-cyan hover:text-white"
              aria-label="Close case study"
              @click="close"
            >
              <Icon name="mdi:close" class="h-5 w-5" />
            </button>
          </div>

          <div class="dialog-scroll flex-1 overflow-y-auto px-5 py-6 sm:px-7 sm:py-8">
            <PortfolioProjectDetail :project="project" />
          </div>

          <div class="flex shrink-0 flex-wrap gap-3 border-t border-white/8 px-5 py-4 sm:px-7">
            <NuxtLink
              to="/contact"
              class="inline-flex flex-1 items-center justify-center gap-2 rounded-full gradient-bg px-5 py-3 font-dm text-sm font-semibold text-[#04121C] sm:flex-none"
              @click="close"
            >
              Let's Talk
              <Icon name="mdi:arrow-right" class="h-4 w-4" />
            </NuxtLink>
            <button
              type="button"
              class="inline-flex flex-1 cursor-pointer items-center justify-center rounded-full border border-white/16 px-5 py-3 font-dm text-sm font-semibold text-[#C3D0E0] transition-colors hover:border-brand-cyan hover:text-white sm:flex-none"
              @click="close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.25s ease;
}

.dialog-fade-enter-active .dialog-panel,
.dialog-fade-leave-active .dialog-panel {
  transition: transform 0.3s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.25s ease;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}

.dialog-fade-enter-from .dialog-panel,
.dialog-fade-leave-to .dialog-panel {
  transform: translateY(24px);
  opacity: 0;
}

.dialog-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 180, 216, 0.35) transparent;
}

@media (prefers-reduced-motion: reduce) {
  .dialog-fade-enter-active,
  .dialog-fade-leave-active,
  .dialog-fade-enter-active .dialog-panel,
  .dialog-fade-leave-active .dialog-panel {
    transition: none;
  }
}
</style>
