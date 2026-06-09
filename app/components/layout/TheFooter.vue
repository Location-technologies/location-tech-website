<script setup lang="ts">
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-brand-gray/20 bg-brand-dark text-white">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
      <p class="text-sm text-brand-gray">
        &copy; {{ year }} Location Technologies Pvt. Ltd.
      </p>
      <ul class="flex flex-wrap justify-center gap-4">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-sm text-brand-gray transition-colors hover:text-brand-cyan"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
