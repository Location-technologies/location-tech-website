<script setup lang="ts">
import {
  BRAND_ALT,
  BRAND_LOGOS,
  OFFICE_ADDRESS,
  OFFICE_COORDS,
  OFFICE_DIRECTIONS_URL,
  OFFICE_MAP_EMBED_URL,
} from '~/constants/brand'

const config = useRuntimeConfig()

const mapEmbedUrl = computed(() =>
  OFFICE_MAP_EMBED_URL(config.public.googleMapsApiKey || undefined),
)
</script>

<template>
  <section class="relative">
    <div class="relative h-[460px] overflow-hidden bg-[#0c2236] sm:h-[520px]">
      <ClientOnly>
        <iframe
          :src="mapEmbedUrl"
          title="Location Technologies office on Google Maps"
          class="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <template #fallback>
          <div class="absolute inset-0 flex items-center justify-center bg-[#0c2236]" aria-hidden="true">
            <div class="h-10 w-10 animate-pulse rounded-full bg-brand-cyan/30" />
          </div>
        </template>
      </ClientOnly>

      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-brand-dark/25" aria-hidden="true" />

      <div class="absolute bottom-6 left-1/2 z-[4] min-w-[280px] -translate-x-1/2 rounded-2xl border border-brand-cyan/40 bg-brand-dark/92 px-[22px] py-[18px] text-left shadow-[0_24px_50px_-22px_rgba(0,0,0,0.8)] backdrop-blur-sm max-[560px]:w-[calc(100%-40px)] max-[560px]:min-w-0">
        <div class="flex items-center gap-3">
          <NuxtImg
            :src="BRAND_LOGOS.logoWhite"
            width="40"
            height="40"
            :alt="BRAND_ALT"
            class="h-10 w-10 shrink-0 rounded-[11px] object-contain"
          />
          <div>
            <h4 class="font-syne text-base font-semibold tracking-tight text-white">
              Location Technologies
            </h4>
            <div class="text-[13px] text-[#94A6BE]">
              {{ OFFICE_ADDRESS }}
            </div>
            <div class="mt-0.5 font-dm text-[11px] text-[#7A8FA8]">
              {{ OFFICE_COORDS.lat.toFixed(5) }}, {{ OFFICE_COORDS.lng.toFixed(5) }}
            </div>
          </div>
        </div>
        <a
          :href="OFFICE_DIRECTIONS_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="pointer-events-auto mt-3.5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-cyan hover:text-brand-green"
        >
          Get Directions
          <Icon name="mdi:open-in-new" class="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  </section>
</template>
