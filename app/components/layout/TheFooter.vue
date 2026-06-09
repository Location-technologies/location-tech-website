<script setup lang="ts">
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

const services = [
  { label: 'GIS & Mapping', to: '/services' },
  { label: 'GPS Tracking', to: '/services' },
  { label: 'Geofencing', to: '/services' },
  { label: 'Spatial Analytics', to: '/services' },
  { label: 'Fleet Management', to: '/services' },
]

const socials = [
  { icon: 'mdi:linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'mdi:twitter', href: '#', label: 'Twitter' },
  { icon: 'mdi:facebook', href: '#', label: 'Facebook' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-brand-cyan/10 bg-[#081120] pt-20 text-white">
    <div class="mx-auto max-w-[1240px] px-5 sm:px-8">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-12">
        <!-- Brand -->
        <div>
          <NuxtLink to="/" class="mb-5 inline-block">
            <AppLogo />
          </NuxtLink>
          <p class="max-w-[300px] text-[15px] leading-relaxed text-[#94A6BE]">
            Precision GIS, GPS tracking, and geofencing solutions engineered for modern enterprises across Pakistan.
          </p>
          <div class="mt-6 flex gap-3">
            <a
              v-for="social in socials"
              :key="social.icon"
              :href="social.href"
              :aria-label="social.label"
              class="group flex h-[42px] w-[42px] items-center justify-center rounded-[11px] border border-white/10 bg-white/[0.04] transition-all duration-250 hover:-translate-y-0.5 hover:border-transparent hover:gradient-bg"
            >
              <Icon
                :name="social.icon"
                class="h-[18px] w-[18px] text-[#94A6BE] transition-colors duration-250 group-hover:text-[#04121C]"
              />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="mb-[22px] font-syne text-base font-bold text-white">
            Quick Links
          </h4>
          <ul class="flex flex-col gap-[13px]">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-[15px] text-[#94A6BE] transition-colors duration-200 hover:text-brand-cyan"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="mb-[22px] font-syne text-base font-bold text-white">
            Services
          </h4>
          <ul class="flex flex-col gap-[13px]">
            <li v-for="service in services" :key="service.label">
              <NuxtLink
                :to="service.to"
                class="text-[15px] text-[#94A6BE] transition-colors duration-200 hover:text-brand-cyan"
              >
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Get in Touch -->
        <div>
          <h4 class="mb-[22px] font-syne text-base font-bold text-white">
            Get in Touch
          </h4>
          <ul class="flex flex-col gap-[13px]">
            <li class="flex items-start gap-3 text-[15px] leading-normal text-[#94A6BE]">
              <Icon name="mdi:email-outline" class="mt-0.5 h-[17px] w-[17px] shrink-0 text-brand-cyan" />
              <a href="mailto:hello@loctech.pk" class="transition-colors hover:text-brand-cyan">
                hello@loctech.pk
              </a>
            </li>
            <li class="flex items-start gap-3 text-[15px] leading-normal text-[#94A6BE]">
              <Icon name="mdi:phone-outline" class="mt-0.5 h-[17px] w-[17px] shrink-0 text-brand-cyan" />
              <a href="tel:+92510000000" class="transition-colors hover:text-brand-cyan">
                +92 51 000 0000
              </a>
            </li>
            <li class="flex items-start gap-3 text-[15px] leading-normal text-[#94A6BE]">
              <Icon name="mdi:map-marker-outline" class="mt-0.5 h-[17px] w-[17px] shrink-0 text-brand-cyan" />
              <span>Rawalpindi, Pakistan</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] py-[26px] text-sm text-brand-gray">
        <span>&copy; {{ year }} Location Technologies Private Limited. All rights reserved.</span>
        <span class="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" class="h-[15px] w-[15px]" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="#00C896" stroke-width="1.8" />
            <circle cx="12" cy="12" r="3" stroke="#00C896" stroke-width="1.8" />
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#00C896" stroke-width="1.8" stroke-linecap="round" />
          </svg>
          Designed with precision
        </span>
      </div>
    </div>
  </footer>
</template>
