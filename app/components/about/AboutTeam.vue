<script setup lang="ts">
type TeamTier = 'directors' | 'management' | 'team-lead' | 'developers'

interface TeamMember {
  id: string
  name: string
  role: string
  tier: TeamTier
  order: number
  bio?: string
  photo?: string
  linkedin?: string
}

const { data } = await useAsyncData('about-team', () =>
  queryCollection('team').first(),
)

const members = computed(() => (data.value?.members ?? []) as TeamMember[])

const tierConfig = [
  { key: 'directors' as const, label: 'Directors', description: 'Strategic leadership guiding our vision and growth.' },
  { key: 'management' as const, label: 'Management', description: 'Keeping projects on track and clients informed.' },
  { key: 'team-lead' as const, label: 'Team Lead', description: 'Hands-on engineering leadership and delivery.' },
  { key: 'developers' as const, label: 'Developers', description: 'Building the platforms that power our solutions.' },
]

const membersByTier = computed(() =>
  tierConfig.map(tier => ({
    ...tier,
    members: members.value
      .filter(m => m.tier === tier.key)
      .sort((a, b) => a.order - b.order),
  })).filter(tier => tier.members.length > 0),
)

const photoErrors = ref<Record<string, boolean>>({})

const teamAssetPhotos = import.meta.glob<string>(
  '~/assets/images/**/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' },
)

function resolvePhoto(photo?: string): string | undefined {
  if (!photo) return undefined

  const filename = photo.split('/').pop()!
  const asset = Object.entries(teamAssetPhotos).find(([path]) => path.endsWith(filename))
  if (asset) return asset[1]

  if (photo.startsWith('/')) return photo

  return undefined
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  return parts.length === 1
    ? parts[0]!.slice(0, 2).toUpperCase()
    : (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase()
}

function showPhoto(member: TeamMember) {
  return Boolean(resolvePhoto(member.photo)) && !photoErrors.value[member.id]
}

function onPhotoError(memberId: string) {
  photoErrors.value[memberId] = true
}

function isDirector(tier: TeamTier) {
  return tier === 'directors'
}

function avatarSize(tier: TeamTier) {
  return isDirector(tier) ? 120 : 108
}

function tierGridClass(tier: TeamTier, count: number) {
  if (count === 1) {
    return 'grid-cols-1 justify-items-center'
  }
  if (tier === 'directors') {
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  }
  if (tier === 'developers') {
    return 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto'
  }
  return 'grid-cols-1 sm:grid-cols-2'
}

function cardWidthClass(count: number) {
  return count === 1 ? 'w-full max-w-[300px]' : 'w-full'
}

const memberMotionDelays = computed(() => {
  const delays: Record<string, number> = {}
  let index = 0
  for (const tier of membersByTier.value) {
    for (const member of tier.members) {
      delays[member.id] = Math.min(index * 80, 400)
      index += 1
    }
  }
  return delays
})
</script>

<template>
  <section class="team-section relative overflow-hidden bg-brand-dark py-20 sm:py-24 lg:py-28">
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.04]"
      style="background-image: radial-gradient(rgba(0,180,216,0.9) 1.2px, transparent 1.2px); background-size: 28px 28px;"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-cyan/8 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <BaseSectionHeader
        centered
        eyebrow="People"
        subtitle="The directors, engineers, and project leaders building Pakistan's location-tech future."
        class="mx-auto mb-14 max-w-2xl sm:mb-16 [&_h2]:inline-block [&_h2]:text-white [&_p]:text-[#94A6BE]"
      >
        Meet the Team<span class="underline-grad" />
      </BaseSectionHeader>

      <div
        v-for="(tier, tierIndex) in membersByTier"
        :key="tier.key"
        class="tier-block"
        :class="tierIndex > 0 ? 'mt-16 sm:mt-20' : ''"
      >
        <div class="mb-8 flex flex-col items-center gap-2 sm:mb-10">
          <div class="flex w-full max-w-md items-center gap-4">
            <span class="h-px flex-1 bg-gradient-to-r from-transparent to-brand-cyan/40" />
            <h3 class="shrink-0 font-dm text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan sm:text-[13px]">
              {{ tier.label }}
            </h3>
            <span class="h-px flex-1 bg-gradient-to-l from-transparent to-brand-cyan/40" />
          </div>
          <p class="max-w-md text-center text-sm text-[#7a8fa8]">
            {{ tier.description }}
          </p>
        </div>

        <div
          class="grid gap-5 sm:gap-6"
          :class="tierGridClass(tier.key, tier.members.length)"
        >
          <article
            v-for="member in tier.members"
            :key="member.id"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: memberMotionDelays[member.id] ?? 0 } }"
            :visible-once="true"
            class="team-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.97] text-center shadow-[0_20px_48px_-24px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-cyan/25 hover:shadow-[0_28px_56px_-20px_rgba(0,180,216,0.35)]"
            :class="[
              cardWidthClass(tier.members.length),
              isDirector(tier.key) ? 'team-card--director px-7 py-9 sm:px-8 sm:py-10' : 'px-6 py-8 sm:px-7 sm:py-9',
            ]"
          >
            <div
              class="pointer-events-none absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-brand-cyan to-brand-green transition-transform duration-400 group-hover:scale-x-100"
              aria-hidden="true"
            />

            <div class="mx-auto mb-5 sm:mb-6">
              <div
                class="relative mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-[#d4eef2] to-[#e6f7f3] p-[3px] shadow-[0_0_0_3px_rgba(0,180,216,0.15)] transition-shadow duration-300 group-hover:shadow-[0_0_0_4px_rgba(0,180,216,0.28)]"
                :style="{ width: `${avatarSize(tier.key)}px`, height: `${avatarSize(tier.key)}px` }"
              >
                <div class="h-full w-full overflow-hidden rounded-full bg-[#e8f4f6]">
                  <img
                    v-if="showPhoto(member)"
                    :src="resolvePhoto(member.photo)"
                    :alt="`${member.name}, ${member.role} at Location Technologies`"
                    :width="avatarSize(tier.key)"
                    :height="avatarSize(tier.key)"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    @error="onPhotoError(member.id)"
                  >
                  <div
                    v-else
                    class="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-cyan/15 to-brand-green/15"
                  >
                    <span
                      class="font-syne font-bold text-[#4a8a9a]"
                      :class="isDirector(tier.key) ? 'text-3xl' : 'text-2xl'"
                    >
                      {{ getInitials(member.name) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="font-syne text-lg font-bold leading-snug text-brand-dark sm:text-xl">
              {{ member.name }}
            </h3>

            <span class="mx-auto mt-2 inline-block rounded-full border border-brand-cyan/20 bg-brand-cyan/8 px-3 py-1 text-xs font-semibold tracking-wide text-[#0096b4] sm:text-[13px]">
              {{ member.role }}
            </span>

            <p
              v-if="member.bio"
              class="mt-4 flex-1 text-[13px] leading-relaxed text-[#6b7a8c] sm:text-sm"
            >
              {{ member.bio }}
            </p>

            <div
              v-if="member.linkedin"
              class="mt-5 sm:mt-6"
            >
              <a
                :href="member.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="linkedin-btn inline-flex items-center justify-center gap-2 rounded-xl bg-[#eef6f7] px-4 py-2.5 text-sm font-semibold text-[#0077b5] transition-all duration-250 hover:-translate-y-0.5 hover:bg-[#0077b5] hover:text-white hover:shadow-[0_8px_20px_-6px_rgba(0,119,181,0.45)]"
                :aria-label="`${member.name} on LinkedIn`"
              >
                <Icon name="mdi:linkedin" class="h-[18px] w-[18px]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .team-card--director {
    min-height: 320px;
  }
}
</style>
