<template>
  <div class="overflow-x-hidden">
    <BasePageHero
      breadcrumb="Contact"
      heading-light="Get in "
      heading-gradient="Touch"
      subtitle="We're based in Rawalpindi, Pakistan — and we'd love to hear from you."
    />
    <ContactCards />
    <ContactForm />
    <ContactMap />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us — Location Technologies',
  description: 'Get in touch with Location Technologies to discuss your GIS, tracking, or geofencing project.',
})
</script>
