<script setup lang="ts">
import { BRAND_ALT, BRAND_LOGOS } from '~/constants/brand'

withDefaults(
  defineProps<{
    showTagline?: boolean
    variant?: 'default' | 'onDark'
    layout?: 'compact' | 'full'
    size?: 'default' | 'lg'
  }>(),
  { showTagline: false, variant: 'default', layout: 'compact', size: 'default' },
)

const fullLogoClasses: Record<'default' | 'lg', string> = {
  // Source logos are ~1.26:1 (square-ish). Size by max-height + w-auto so the mark isn't horizontally crushed.
  default: 'h-auto w-auto max-h-[72px] max-w-[55vw] shrink-0 object-contain object-left min-[400px]:max-h-[88px] sm:max-h-[100px]',
  lg: 'h-auto w-auto max-h-[52px] max-w-[42vw] shrink-0 object-contain object-left min-[400px]:max-h-[64px] min-[640px]:max-h-[80px] min-[981px]:max-h-[108px] min-[981px]:max-w-[220px]',
}
</script>

<template>
  <span
    class="flex min-w-0 items-center gap-2.5 min-[400px]:gap-3"
    :class="layout === 'full' && showTagline ? 'flex-col items-start min-[400px]:flex-row min-[400px]:items-center' : ''"
  >
    <template v-if="layout === 'full'">
      <NuxtImg
        :src="variant === 'onDark' ? BRAND_LOGOS.logoWhiteHeader : BRAND_LOGOS.logoWithoutBg"
        width="335"
        height="266"
        :alt="BRAND_ALT"
        class="!h-auto !w-auto"
        :class="fullLogoClasses[size]"
        style="aspect-ratio: 3355 / 2660;"
      />
      <small
        v-if="showTagline"
        class="hidden font-dm text-[10.5px] font-medium uppercase tracking-[0.12em] text-brand-cyan min-[400px]:block min-[400px]:tracking-[0.16em]"
      >
        Map · Track · Connect
      </small>
    </template>
    <template v-else>
      <NuxtImg
        :src="BRAND_LOGOS.logoCompact"
        width="38"
        height="38"
        :alt="BRAND_ALT"
        class="h-[38px] w-[38px] shrink-0 object-contain"
      />
      <span class="min-w-0 leading-tight font-syne text-[15px] font-extrabold tracking-normal text-white min-[400px]:text-[17px] sm:text-[19px]">
        <span class="block truncate">Location Technologies</span>
        <small
          v-if="showTagline"
          class="mt-px hidden font-dm text-[10.5px] font-medium uppercase tracking-[0.12em] text-brand-cyan min-[400px]:block min-[400px]:tracking-[0.16em]"
        >
          Map · Track · Connect
        </small>
      </span>
    </template>
  </span>
</template>
