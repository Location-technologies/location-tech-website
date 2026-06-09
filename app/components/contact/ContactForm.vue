<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData('contact-form-services', () =>
  queryCollection('services').first(),
)

const services = computed(() => data.value?.services ?? [])

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: (route.query.service as string) ?? '',
  message: '',
})

const errors = reactive({
  name: false,
  email: false,
  phone: false,
  service: false,
  message: false,
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[\d\s\-+()]{7,20}$/

const whyItems = [
  { title: 'Fast response', desc: 'We reply within one business day, every time.' },
  { title: 'Local expertise', desc: 'Pakistan-based team that knows the terrain.' },
  { title: 'Tailored solutions', desc: 'Systems built around your exact workflow.' },
  { title: '24/7 support', desc: 'Round-the-clock monitoring after deployment.' },
]

function validate(): boolean {
  errors.name = !form.name.trim()
  errors.email = !form.email.trim() || !emailRegex.test(form.email.trim())
  errors.phone = form.phone.trim() !== '' && !phoneRegex.test(form.phone.trim())
  errors.service = false
  errors.message = !form.message.trim()
  return !Object.values(errors).some(Boolean)
}

function clearError(field: keyof typeof errors) {
  errors[field] = false
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.service = ''
  form.message = ''
}

async function handleSubmit() {
  if (!validate()) return

  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 600))
  console.log('Contact form submitted:', { ...form })
  isSubmitting.value = false
  showSuccess.value = true
  resetForm()
  setTimeout(() => { showSuccess.value = false }, 4000)
}

const inputBase = 'w-full rounded-[11px] border border-white/10 border-b-2 border-b-white/16 bg-[rgba(8,17,32,0.6)] px-4 py-3.5 font-dm text-[15.5px] text-[#E6EDF6] outline-none transition-all placeholder:text-[#5d6f86] focus:border-brand-cyan/30 focus:border-b-brand-cyan focus:bg-[rgba(8,17,32,0.9)] focus:shadow-[0_6px_22px_-14px_rgba(0,180,216,0.7)]'

const { el: formEl, isVisible: formVisible } = useScrollReveal()
const { el: whyEl, isVisible: whyVisible } = useScrollReveal()
</script>

<template>
  <section id="contact-form" class="bg-gradient-to-b from-[#0B1A2E] to-brand-dark py-[90px] pb-[110px]">
    <div class="mx-auto grid max-w-[1240px] items-start gap-11 px-4 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
      <!-- Form card -->
      <div
        ref="formEl"
        :class="[
          'rounded-3xl border-teal bg-white/[0.03] p-11 backdrop-blur-[14px] transition-all duration-700 max-[560px]:p-8',
          formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <h2 class="mb-2 font-syne text-[30px] font-extrabold text-white">
          Send us a message
        </h2>
        <p class="mb-[30px] text-[15.5px] text-[#94A6BE]">
          Tell us about your project and we'll get back to you within one business day.
        </p>

        <div class="space-y-[22px]">
          <div class="grid gap-[18px] sm:grid-cols-2">
            <div>
              <label for="contact-name" class="mb-2 block text-[13.5px] font-semibold text-[#C3D0E0]">
                Full Name <span class="text-brand-green">*</span>
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                placeholder="Your name"
                :class="[inputBase, errors.name ? '!border-red-400 !border-b-red-400' : '']"
                @input="clearError('name')"
              >
              <p v-if="errors.name" class="mt-1.5 text-[12.5px] text-[#ff8585]">Please enter your name.</p>
            </div>
            <div>
              <label for="contact-email" class="mb-2 block text-[13.5px] font-semibold text-[#C3D0E0]">
                Email Address <span class="text-brand-green">*</span>
              </label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                placeholder="you@company.com"
                :class="[inputBase, errors.email ? '!border-red-400 !border-b-red-400' : '']"
                @input="clearError('email')"
              >
              <p v-if="errors.email" class="mt-1.5 text-[12.5px] text-[#ff8585]">Please enter a valid email.</p>
            </div>
          </div>

          <div class="grid gap-[18px] sm:grid-cols-2">
            <div>
              <label for="contact-phone" class="mb-2 block text-[13.5px] font-semibold text-[#C3D0E0]">Phone Number</label>
              <input
                id="contact-phone"
                v-model="form.phone"
                type="tel"
                placeholder="+92 …"
                :class="[inputBase, errors.phone ? '!border-red-400 !border-b-red-400' : '']"
                @input="clearError('phone')"
              >
              <p v-if="errors.phone" class="mt-1.5 text-[12.5px] text-[#ff8585]">Please enter a valid phone number.</p>
            </div>
            <div>
              <label for="contact-service" class="mb-2 block text-[13.5px] font-semibold text-[#C3D0E0]">Service Interested In</label>
              <select
                id="contact-service"
                v-model="form.service"
                :class="[inputBase, 'appearance-none bg-[length:14px] bg-[right_16px_center] bg-no-repeat pr-10', errors.service ? '!border-red-400 !border-b-red-400' : '']"
                style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2394A6BE' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E&quot;);"
                @change="clearError('service')"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option
                  v-for="service in services"
                  :key="service.slug"
                  :value="service.slug"
                >
                  {{ service.title }}
                </option>
                <option value="other">
                  Other
                </option>
              </select>
              <p v-if="errors.service" class="mt-1.5 text-[12.5px] text-[#ff8585]">Please select a service.</p>
            </div>
          </div>

          <div>
            <label for="contact-message" class="mb-2 block text-[13.5px] font-semibold text-[#C3D0E0]">
              Message <span class="text-brand-green">*</span>
            </label>
            <textarea
              id="contact-message"
              v-model="form.message"
              rows="5"
              placeholder="Tell us what you'd like to map, track, or connect…"
              :class="[inputBase, 'min-h-[130px] resize-y', errors.message ? '!border-red-400 !border-b-red-400' : '']"
              @input="clearError('message')"
            />
            <p v-if="errors.message" class="mt-1.5 text-[12.5px] text-[#ff8585]">Please include a short message (min 20 characters).</p>
          </div>

          <BaseButton
            :disabled="isSubmitting"
            class="mt-1.5 w-full"
            icon="mdi:arrow-right"
            @click="handleSubmit"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </BaseButton>

          <p class="text-center text-[13px] text-brand-gray">
            We respect your privacy. Your details stay with our team.
          </p>

          <div
            v-if="showSuccess"
            class="flex items-center gap-3 rounded-[13px] border border-brand-green/35 bg-brand-green/10 px-[18px] py-4 text-[14.5px] font-medium text-[#9ff0d4]"
            role="status"
          >
            <Icon name="mdi:check" class="h-[22px] w-[22px] shrink-0 text-brand-green" />
            Thanks! Your message has been sent — we'll be in touch shortly.
          </div>
        </div>
      </div>

      <!-- Why panel -->
      <div
        ref="whyEl"
        :class="[
          'transition-all duration-700 delay-150',
          whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <span class="mb-3.5 block font-dm text-[13px] font-semibold tracking-[0.18em] text-brand-cyan uppercase">Why work with us?</span>
        <h2 class="mb-3.5 font-syne text-[30px] font-extrabold leading-tight text-white">
          Precision partners, not just a vendor.
        </h2>
        <p class="mb-[30px] text-base leading-relaxed text-[#94A6BE]">
          From the first conversation to long after launch, we stay close to your operations.
        </p>

        <div class="mb-[34px] flex flex-col gap-[18px]">
          <div
            v-for="item in whyItems"
            :key="item.title"
            class="flex items-start gap-[15px]"
          >
            <span class="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[9px] border border-brand-green/40 bg-gradient-to-br from-brand-cyan/20 to-brand-green/20">
              <Icon name="mdi:check" class="h-[15px] w-[15px] text-brand-green" />
            </span>
            <div>
              <b class="block font-syne text-[17px] text-white">{{ item.title }}</b>
              <span class="text-sm leading-snug text-[#94A6BE]">{{ item.desc }}</span>
            </div>
          </div>
        </div>

        <div class="relative flex min-h-[180px] items-center gap-[18px] overflow-hidden rounded-[20px] border-teal bg-gradient-to-br from-brand-cyan/12 to-brand-green/8 p-[30px]">
          <div class="pointer-events-none absolute -right-[30px] -bottom-[30px] h-40 w-40 rounded-full border border-dashed border-brand-cyan/30" aria-hidden="true">
            <div class="absolute inset-[26px] rounded-full border border-dashed border-brand-green/30" />
          </div>
          <div class="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] gradient-bg shadow-[0_12px_30px_-10px_rgba(0,180,216,0.6)]">
            <Icon name="mdi:map-marker" class="h-7 w-7 text-[#04121C]" />
          </div>
          <div class="relative z-10">
            <b class="block font-syne text-lg text-white">Rawalpindi, Pakistan</b>
            <span class="text-[13.5px] text-[#94A6BE]">Serving clients nationwide &amp; across the GCC</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
