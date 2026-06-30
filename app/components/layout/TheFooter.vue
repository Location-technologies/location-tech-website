<script setup lang="ts">
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

const services = [
  { label: 'Geographic & Web Mapping', to: '/services' },
  { label: 'SaaS & PaaS Development', to: '/services' },
  { label: 'Legacy System Modernization', to: '/services' },
  { label: 'AI-Driven Systems', to: '/services' },
  { label: 'WordPress & Shopify', to: '/services' },
  { label: 'DevOps Infrastructure', to: '/services' },
]

const socials = [
  { icon: 'mdi:linkedin', href: 'https://www.linkedin.com/company/locationtechnologies/', label: 'LinkedIn' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="overflow-hidden border-t border-brand-cyan/10 bg-[#081120] pt-12 text-white min-[400px]:pt-16 min-[981px]:pt-20">
    <div class="mx-auto max-w-[1240px] px-4 min-[400px]:px-5 sm:px-8">
      <!--
        Mobile (<560px): 1 column
        Tablet (560–980px): 2 columns — brand + contact span full width
        Desktop (981px+): 4 columns
      -->
      <div
        class="grid grid-cols-1 gap-8 min-[560px]:grid-cols-2 min-[560px]:gap-10 min-[981px]:grid-cols-[1.6fr_1fr_1fr_1.3fr] min-[981px]:gap-12"
      >
        <!-- Brand -->
        <div class="min-w-0 min-[560px]:col-span-2 min-[981px]:col-span-1">
          <NuxtLink to="/" class="mb-4 inline-block min-[400px]:mb-5">
            <AppLogo layout="full" />
          </NuxtLink>
          <p class="max-w-md text-sm leading-relaxed text-[#94A6BE] min-[400px]:max-w-[300px] min-[400px]:text-[15px]">
            Full-stack software — GIS, SaaS, AI, e-commerce, and cloud infrastructure — engineered for enterprises across Pakistan.
          </p>
          <div class="mt-5 flex gap-3 min-[400px]:mt-6">
            <a
              v-for="social in socials"
              :key="social.icon"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="group flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px] border border-white/10 bg-white/[0.04] transition-all duration-250 hover:-translate-y-0.5 hover:border-transparent hover:gradient-bg"
            >
              <Icon
                :name="social.icon"
                class="h-[18px] w-[18px] text-[#94A6BE] transition-colors duration-250 group-hover:text-[#04121C]"
              />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="min-w-0">
          <h4 class="mb-4 font-syne text-base font-bold text-white min-[400px]:mb-[22px]">
            Quick Links
          </h4>
          <ul class="flex flex-col gap-3 min-[400px]:gap-[13px]">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm text-[#94A6BE] transition-colors duration-200 hover:text-brand-cyan min-[400px]:text-[15px]"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="min-w-0">
          <h4 class="mb-4 font-syne text-base font-bold text-white min-[400px]:mb-[22px]">
            Services
          </h4>
          <ul class="flex flex-col gap-3 min-[400px]:gap-[13px]">
            <li v-for="service in services" :key="service.label">
              <NuxtLink
                :to="service.to"
                class="text-sm text-[#94A6BE] transition-colors duration-200 hover:text-brand-cyan min-[400px]:text-[15px]"
              >
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Get in Touch -->
        <div class="min-w-0 min-[560px]:col-span-2 min-[981px]:col-span-1">
          <h4 class="mb-4 font-syne text-base font-bold text-white min-[400px]:mb-[22px]">
            Get in Touch
          </h4>
          <ul class="flex flex-col gap-3 min-[400px]:gap-[13px] min-[981px]:max-w-none">
            <li class="flex items-start gap-3 text-sm leading-normal text-[#94A6BE] min-[400px]:text-[15px]">
              <Icon name="mdi:email-outline" class="mt-0.5 h-[17px] w-[17px] shrink-0 text-brand-cyan" />
              <a href="mailto:info@locationtechnologies.io" class="break-all transition-colors hover:text-brand-cyan min-[981px]:break-normal">
                info@locationtechnologies.io
              </a>
            </li>
            <li class="flex items-start gap-3 text-sm leading-normal text-[#94A6BE] min-[400px]:text-[15px]">
              <Icon name="mdi:phone-outline" class="mt-0.5 h-[17px] w-[17px] shrink-0 text-brand-cyan" />
              <a href="tel:+923348706354" class="transition-colors hover:text-brand-cyan">
                +92 334 8706354
              </a>
            </li>
            <li class="flex items-start gap-3 text-sm leading-normal text-[#94A6BE] min-[400px]:text-[15px]">
              <Icon name="mdi:map-marker-outline" class="mt-0.5 h-[17px] w-[17px] shrink-0 text-brand-cyan" />
              <span>Chakwal, Punjab, Pakistan</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col items-start gap-4 border-t border-white/[0.07] py-6 text-center text-xs text-brand-gray min-[400px]:mt-12 min-[400px]:py-[26px] min-[400px]:text-sm min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between min-[640px]:gap-3 min-[640px]:text-left"
      >
        <span class="w-full min-[640px]:w-auto">
          &copy; {{ year }} Location Technologies Private Limited. All rights reserved.
        </span>
        <span class="flex w-full items-center justify-center gap-2 min-[640px]:w-auto min-[640px]:justify-end">
          <svg viewBox="0 0 24 24" fill="none" class="h-[15px] w-[15px] shrink-0" aria-hidden="true">
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
