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
  default: 'h-auto w-[160px] max-w-[55vw] shrink-0 object-contain object-left min-[400px]:w-[200px] min-[400px]:max-w-full sm:w-[220px]',
  lg: 'h-auto w-[96px] max-w-[38vw] max-h-[48px] shrink-0 object-contain object-left min-[400px]:w-[128px] min-[400px]:max-h-[64px] min-[640px]:w-[155px] min-[640px]:max-h-[80px] min-[981px]:w-[200px] min-[981px]:max-h-[108px]',
}
</script>

<template>
  <span
    class="flex min-w-0 items-center gap-2.5 min-[400px]:gap-3"
    :class="layout === 'full' && showTagline ? 'flex-col items-start min-[400px]:flex-row min-[400px]:items-center' : ''"
  >
    <template v-if="layout === 'full'">
      <NuxtImg
        :src="variant === 'onDark' ? BRAND_LOGOS.logoWhite : BRAND_LOGOS.logoWithoutBg"
        width="600"
        height="120"
        :alt="BRAND_ALT"
        :class="fullLogoClasses[size]"
      />
      <small
        v-if="showTagline"
        class="hidden font-dm text-[10.5px] font-medium uppercase tracking-[0.16em] text-brand-cyan min-[400px]:block"
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
      <span class="min-w-0 leading-tight font-syne text-[15px] font-extrabold text-white min-[400px]:text-[17px] sm:text-[19px]">
        <span class="block truncate">Location Technologies</span>
        <small
          v-if="showTagline"
          class="mt-px hidden font-dm text-[10.5px] font-medium uppercase tracking-[0.16em] text-brand-cyan min-[400px]:block"
        >
          Map · Track · Connect
        </small>
      </span>
    </template>
  </span>
</template>
