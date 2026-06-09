<script setup lang="ts">
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

const { y: scrollY } = useWindowScroll()
const scrolled = computed(() => scrollY.value > 30)

const mobileOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  mobileOpen.value = false
})

watch(mobileOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})

const headerClasses = computed(() => [
  'fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-[350ms] ease-out',
  scrolled.value
    ? 'border-brand-cyan/14 bg-brand-dark/78 py-[13px] shadow-[0_12px_40px_-22px_rgba(0,0,0,0.8)] backdrop-blur-[16px] backdrop-saturate-[140%]'
    : 'border-transparent bg-transparent py-[22px]',
])

const navLinkClasses =
  'relative py-1.5 text-[15px] font-medium text-[#C3D0E0] transition-colors duration-200 hover:text-brand-cyan after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-sm after:bg-gradient-to-r after:from-brand-cyan after:to-brand-green after:transition-[width] after:duration-300 hover:after:w-full'
</script>

<template>
  <header :class="headerClasses">
    <div class="mx-auto flex max-w-[1240px] items-center justify-between gap-3 px-4 min-[400px]:px-5 sm:px-8">
      <NuxtLink to="/" class="min-w-0 shrink">
        <AppLogo show-tagline />
      </NuxtLink>

      <ul class="hidden min-[981px]:flex items-center gap-[38px]">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            :class="navLinkClasses"
            :exact-active-class="link.to === '/' ? '!text-white after:!w-full' : undefined"
            :active-class="link.to !== '/' ? '!text-white after:!w-full' : undefined"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <div class="hidden min-[981px]:flex items-center gap-[18px]">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full gradient-bg px-[30px] py-[15px] font-dm text-base font-semibold text-[#04121C] shadow-[0_8px_28px_-8px_rgba(0,180,216,0.55)] transition-all duration-250 hover:scale-105 hover:shadow-[0_14px_38px_-8px_rgba(0,200,150,0.6)]"
        >
          Get in Touch
        </NuxtLink>
      </div>

      <button
        type="button"
        class="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-[11px] border border-white/18 bg-white/[0.04] min-[981px]:hidden"
        :class="{ open: mobileOpen }"
        :aria-expanded="mobileOpen"
        aria-label="Menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span
          class="block h-0.5 w-5 rounded-sm bg-white transition-all duration-300"
          :class="mobileOpen ? 'translate-y-[7px] rotate-45' : ''"
        />
        <span
          class="block h-0.5 w-5 rounded-sm bg-white transition-all duration-300"
          :class="mobileOpen ? 'opacity-0' : ''"
        />
        <span
          class="block h-0.5 w-5 rounded-sm bg-white transition-all duration-300"
          :class="mobileOpen ? '-translate-y-[7px] -rotate-45' : ''"
        />
      </button>
    </div>
  </header>

  <div
    class="fixed inset-x-0 top-0 z-[99] max-[980px]:flex flex-col gap-1.5 border-b border-brand-cyan/18 bg-brand-dark/[0.97] px-5 pb-9 pt-24 backdrop-blur-[20px] transition-transform duration-[420ms] ease-[cubic-bezier(0.5,0.05,0.2,1)] sm:px-8 min-[981px]:hidden"
    :class="mobileOpen ? 'translate-y-0' : '-translate-y-[105%]'"
    aria-hidden="!mobileOpen"
  >
    <NuxtLink
      v-for="link in navLinks"
      :key="link.to"
      :to="link.to"
      class="border-b border-white/[0.06] py-3.5 font-syne text-2xl font-bold text-[#E6EDF6] transition-colors hover:text-brand-cyan"
      :exact-active-class="link.to === '/' ? '!text-brand-cyan' : undefined"
      :active-class="link.to !== '/' ? '!text-brand-cyan' : undefined"
      @click="mobileOpen = false"
    >
      {{ link.label }}
    </NuxtLink>
    <NuxtLink
      to="/contact"
      class="mt-[22px] inline-flex items-center justify-center gap-2.5 rounded-full gradient-bg px-[30px] py-[15px] font-dm text-base font-semibold text-[#04121C] shadow-[0_8px_28px_-8px_rgba(0,180,216,0.55)] transition-all duration-250 hover:scale-105 hover:shadow-[0_14px_38px_-8px_rgba(0,200,150,0.6)]"
      @click="mobileOpen = false"
    >
      Get in Touch
    </NuxtLink>
  </div>
</template>
