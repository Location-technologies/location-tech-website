<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)

interface PolicyData {
  title: string
  subtitle: string
  lastUpdated: string
  sections: Array<{
    heading: string
    content: string[]
  }>
}

const policies: Record<string, PolicyData> = {
  sportsmania: {
    title: 'SportsMania — Privacy Policy',
    subtitle: 'How we collect, use, protect, and handle your data across web and mobile applications.',
    lastUpdated: 'July 21, 2026',
    sections: [
      {
        heading: '1. Introduction',
        content: [
          'Welcome to SportsMania, developed by Location Technologies Pvt. Ltd. SportsMania connects athletes with sports venue owners to discover, book, and manage sports facilities.',
          'We are deeply committed to protecting your privacy and ensuring your data is handled securely.',
        ],
      },
      {
        heading: '2. Information We Collect',
        content: [
          'Personal Information: Phone number (primary identifier), full name, email address, password (bcrypt hashed), profile photo, and OTP verification codes.',
          'Usage & Device Data: Device model, operating system, app version, push notification tokens, session duration, and booking history.',
          'Location Data: Venue location details and approximate device location to present nearby sports facilities.',
          'Payment Data: Transaction IDs, booking totals, and payment status. Complete credit card or banking details are processed directly by gateway providers and never stored on our servers.',
        ],
      },
      {
        heading: '3. How We Use Information',
        content: [
          'Account Authentication & Security: Registering users, issuing OTP verification codes, and securing JWT sessions.',
          'Booking Engine Operations: Managing real-time slot locks, operating hours, and booking status transitions (Pending -> Confirmed -> Completed).',
          'Communications & Support: Dispatching SMS alerts via Twilio, push notifications, and customer support resolution.',
        ],
      },
      {
        heading: '4. Third-Party Integrations',
        content: [
          'Twilio: SMS OTP verification and notification delivery.',
          'AWS S3: Media storage for venue galleries and proof uploads.',
          'PostgreSQL & Prisma: Encrypted database storage for accounts and bookings.',
          'Payment Gateways: Processing online payments securely.',
        ],
      },
      {
        heading: '5. Contact & Rights',
        content: [
          'Users have the right to request access to, correction of, or deletion of their personal data at any time by contacting support@locationtechnologies.io or visiting our contact page.',
        ],
      },
    ],
  },
  'sportsmania-refund': {
    title: 'SportsMania — Refund & Cancellation Policy',
    subtitle: 'Clear terms governing booking cancellations, refund eligibility, and payment reconciliation.',
    lastUpdated: 'July 21, 2026',
    sections: [
      {
        heading: '1. Cancellation Window',
        content: [
          'Players may cancel pitch bookings up to 4 hours prior to the scheduled slot start time for a full refund or credit.',
          'Cancellations made within 4 hours of the start time may be subject to a cancellation fee determined by the venue owner.',
        ],
      },
      {
        heading: '2. Refund Processing',
        content: [
          'Approved refunds are processed to the original payment method or issued as SportsMania wallet credits within 3–5 business days.',
          'In cases of venue unavailability or operational issues caused by facility owners, 100% of the booking fee is automatically refunded.',
        ],
      },
      {
        heading: '3. Disputes & Resolution',
        content: [
          'If a dispute arises regarding pitch quality or booking attendance, users can submit proof via our support portal within 24 hours of the booking slot.',
        ],
      },
    ],
  },
  'sportsmania-shipping': {
    title: 'SportsMania — Service Delivery Policy',
    subtitle: 'Fulfillment timelines and delivery conditions for digital venue booking services.',
    lastUpdated: 'July 21, 2026',
    sections: [
      {
        heading: '1. Immediate Digital Delivery',
        content: [
          'SportsMania provides digital pitch booking services. Upon successful payment verification, your booking confirmation code and digital pass are generated instantly within the mobile app and web dashboard.',
        ],
      },
      {
        heading: '2. Service Access',
        content: [
          'No physical items are shipped. Present your digital booking pass or registered phone number at the venue facility upon arrival for entry verification.',
        ],
      },
    ],
  },
  'sportsmania-business-model': {
    title: 'SportsMania — Business Model & Operations',
    subtitle: 'Transparent overview of our platform architecture, revenue model, and venue partnership structure.',
    lastUpdated: 'July 21, 2026',
    sections: [
      {
        heading: '1. Platform Overview',
        content: [
          'SportsMania operates as a B2B2C marketplace connecting sports venue operators with players and sports teams.',
          'We provide venue owners with digital management software to digitize operating schedules, multi-pitch availability, photo galleries, and guest bookings.',
        ],
      },
      {
        heading: '2. Revenue Model',
        content: [
          'Platform Service Fees: Small convenience or service fees charged on confirmed digital bookings.',
          'SaaS Subscriptions: Premium management tools and analytics packages for venue owners.',
        ],
      },
      {
        heading: '3. Legal & Operating Entity',
        content: [
          'SportsMania is owned and operated by Location Technologies Pvt. Ltd. Registered Address: House No. MCB 1/586, Mohallah Jafrabad, Tehsil & District Chakwal, Pakistan.',
        ],
      },
    ],
  },
}

const currentPolicy = computed(() => {
  return policies[slug.value] ?? {
    title: 'Legal Policy',
    subtitle: 'Location Technologies Legal Documentation',
    lastUpdated: 'July 21, 2026',
    sections: [
      {
        heading: 'Policy Document',
        content: ['For questions regarding legal policies, please contact info@locationtechnologies.io.'],
      },
    ],
  }
})

useSeoMeta({
  title: computed(() => `${currentPolicy.value.title} — Location Technologies`),
  description: computed(() => currentPolicy.value.subtitle),
})
</script>

<template>
  <div class="overflow-x-hidden bg-brand-dark min-h-screen py-[120px]">
    <div class="mx-auto max-w-[840px] px-4 sm:px-8">
      <nav class="mb-8 flex items-center gap-2.5 text-sm text-[#94A6BE]">
        <NuxtLink to="/" class="transition-colors hover:text-brand-cyan">Home</NuxtLink>
        <span class="text-white/25">›</span>
        <span class="text-brand-cyan">Legal Policy</span>
      </nav>

      <div class="rounded-3xl border border-white/10 bg-[#081120] p-6 sm:p-10 shadow-2xl">
        <span class="inline-block rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-3.5 py-1 text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-4">
          Last Updated: {{ currentPolicy.lastUpdated }}
        </span>

        <h1 class="font-syne text-2xl sm:text-4xl font-extrabold text-white mb-3">
          {{ currentPolicy.title }}
        </h1>
        <p class="text-[16px] text-[#94A6BE] mb-8 leading-relaxed">
          {{ currentPolicy.subtitle }}
        </p>

        <div class="space-y-8 border-t border-white/10 pt-8">
          <div v-for="section in currentPolicy.sections" :key="section.heading" class="space-y-3">
            <h2 class="font-syne text-xl font-bold text-white">
              {{ section.heading }}
            </h2>
            <p
              v-for="(para, idx) in section.content"
              :key="idx"
              class="text-[15px] leading-relaxed text-[#C3D0E0]"
            >
              {{ para }}
            </p>
          </div>
        </div>

        <div class="mt-10 border-t border-white/10 pt-6 flex flex-wrap gap-4 items-center justify-between">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 rounded-full border border-white/16 px-5 py-2.5 font-dm text-sm font-semibold text-[#C3D0E0] hover:border-brand-cyan hover:text-white transition-colors"
          >
            <Icon name="mdi:arrow-left" class="h-4 w-4" />
            Back to Home
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 rounded-full gradient-bg px-5 py-2.5 font-dm text-sm font-semibold text-[#04121C]"
          >
            Contact Support
            <Icon name="mdi:arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

