<script setup lang="ts">
import {
  BRAND_ALT,
  BRAND_LOGOS,
  OFFICE_ADDRESS,
  OFFICE_DIRECTIONS_URL,
  OFFICE_MAP_EMBED_URL,
} from '~/constants/brand'

const config = useRuntimeConfig()

const hasMapKey = computed(() => Boolean(config.public.googleMapsApiKey))

const mapEmbedUrl = computed(() =>
  hasMapKey.value ? OFFICE_MAP_EMBED_URL(config.public.googleMapsApiKey) : '',
)
</script>

<template>
  <section class="relative">
    <div class="relative h-[460px] overflow-hidden bg-[#0c2236]">
      <ClientOnly>
        <iframe
          v-if="hasMapKey"
          :src="mapEmbedUrl"
          title="Location Technologies office on Google Maps"
          class="absolute inset-0 h-full w-full border-0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <template #fallback>
          <div class="absolute inset-0 bg-[#0c2236]" aria-hidden="true" />
        </template>
      </ClientOnly>

      <div
        v-if="!hasMapKey"
        class="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-brand-dark via-[#0c2236] to-brand-dark px-6 text-center"
      >
        <NuxtImg
          :src="BRAND_LOGOS.logoMapFallback"
          width="120"
          height="120"
          :alt="BRAND_ALT"
          class="h-24 w-24 object-contain"
        />
        <p class="max-w-sm text-sm text-[#94A6BE]">
          Map preview unavailable. Add
          <code class="rounded bg-white/5 px-1.5 py-0.5 text-brand-cyan">NUXT_PUBLIC_GOOGLE_MAPS_API_KEY</code>
          to enable the interactive map.
        </p>
      </div>

      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-brand-dark/20" aria-hidden="true" />

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
            <h4 class="font-syne text-base text-white">
              Location Technologies
            </h4>
            <div class="text-[13px] text-[#94A6BE]">
              {{ OFFICE_ADDRESS }}
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
          <Icon name="mdi:arrow-right" class="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  </section>
</template>
