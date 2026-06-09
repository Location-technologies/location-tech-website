<script setup lang="ts">
withDefaults(
  defineProps<{
    showTagline?: boolean
  }>(),
  { showTagline: false },
)
</script>

<template>
  <span class="flex items-center gap-3 font-syne text-[19px] font-extrabold text-white">
    <span class="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] gradient-bg shadow-[0_6px_18px_-6px_rgba(0,180,216,0.6)]">
      <svg viewBox="0 0 24 24" fill="none" class="h-[21px] w-[21px]" aria-hidden="true">
        <path
          d="M12 22s7-6.5 7-12A7 7 0 0 0 5 10c0 5.5 7 12 7 12Z"
          stroke="#04121C"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="10" r="2.4" fill="#04121C" />
      </svg>
    </span>
    <span>
      Location Technologies
      <small
        v-if="showTagline"
        class="mt-px block font-dm text-[10.5px] font-medium uppercase tracking-[0.16em] text-brand-cyan"
      >
        Map · Track · Connect
      </small>
    </span>
  </span>
</template>
