<script setup lang="ts">
type Technology = {
  name: string
  icon: string
  color: string
}

const technologies: Technology[] = [
  { name: 'Python', icon: 'simple-icons:python', color: '#3776AB' },
  { name: 'Django', icon: 'simple-icons:django', color: '#092E20' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#339933' },
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs', color: '#41B883' },
  { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs', color: '#00DC82' },
  { name: 'React', icon: 'simple-icons:react', color: '#61DAFB' },
  { name: 'Next.js', icon: 'simple-icons:nextdotjs', color: '#000000' },
  { name: 'WordPress', icon: 'simple-icons:wordpress', color: '#21759B' },
  { name: 'Shopify', icon: 'simple-icons:shopify', color: '#7AB55C' },
  { name: 'QGIS', icon: 'simple-icons:qgis', color: '#589632' },
  { name: 'ArcGIS', icon: 'simple-icons:esri', color: '#0079C1' },
  { name: 'GeoServer', icon: 'mdi:server-network', color: '#79B937' },
  { name: 'Erdas Imagine', icon: 'mdi:satellite-variant', color: '#0066B3' },
  { name: 'Lidar Processing', icon: 'mdi:radar', color: '#00B4D8' },
  { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED' },
  { name: 'Kubernetes', icon: 'simple-icons:kubernetes', color: '#326CE5' },
  { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
  { name: 'PostGIS', icon: 'mdi:database-marker', color: '#336791' },
]
</script>

<template>
  <section class="tech relative overflow-hidden bg-gradient-to-b from-[#F0FAFA] via-white to-[#F0FAFA] py-[110px]">
    <!-- Ambient background -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-cyan/10 blur-3xl" />
      <div class="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-brand-green/10 blur-3xl" />
      <div
        class="absolute inset-0 opacity-[0.35]"
        style="background-image: radial-gradient(circle at 1px 1px, #00B4D8 0.6px, transparent 0); background-size: 28px 28px;"
      />
    </div>

    <div class="relative mx-auto max-w-[1240px] px-4 sm:px-8">
      <BaseSectionHeader
        centered
        eyebrow="Our Toolkit"
        subtitle="From backend frameworks and GIS platforms to cloud infrastructure and e-commerce — the tools we use to build precise, scalable software."
        class="mx-auto mb-14 max-w-[640px] [&_h2]:inline-block [&_p]:text-[#5b6b7e]"
      >
        Our Technology Stack<span class="underline-grad" />
      </BaseSectionHeader>
    </div>

    <div class="marquee-viewport group/row" aria-label="Technologies we use">
      <div class="marquee-fade marquee-fade--left" aria-hidden="true" />
      <div class="marquee-fade marquee-fade--right" aria-hidden="true" />

      <div class="marquee-track marquee-track--left">
        <ul
          v-for="copy in 2"
          :key="`marquee-${copy}`"
          class="marquee-row flex shrink-0 items-stretch gap-5 pl-5"
          :aria-hidden="copy === 2"
        >
          <li
            v-for="tech in technologies"
            :key="`marquee-${copy}-${tech.name}`"
            class="marquee-card group/card"
            :style="{ '--accent': tech.color }"
          >
            <Icon
              :name="tech.icon"
              mode="svg"
              size="80"
              class="tech-icon"
              :style="{ color: tech.color }"
            />
            <span class="card-label">{{ tech.name }}</span>
            <span class="card-glow" aria-hidden="true" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-viewport {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-block: 6px;
}

.marquee-fade {
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  width: clamp(48px, 10vw, 140px);
}

.marquee-fade--left {
  left: 0;
  background: linear-gradient(to right, #F8FCFC 0%, rgba(248, 252, 252, 0.85) 40%, transparent 100%);
}

.marquee-fade--right {
  right: 0;
  background: linear-gradient(to left, #F8FCFC 0%, rgba(248, 252, 252, 0.85) 40%, transparent 100%);
}

.marquee-track {
  display: flex;
  width: max-content;
}

.marquee-track--left {
  animation: marquee-left 45s linear infinite;
}

.marquee-viewport:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-card {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 148px;
  padding: 28px 20px 24px;
  list-style: none;
  border-radius: 20px;
  border: 1px solid rgba(0, 180, 216, 0.12);
  background: linear-gradient(160deg, #ffffff 0%, #f8fcfd 100%);
  box-shadow:
    0 4px 6px -2px rgba(15, 40, 60, 0.04),
    0 16px 40px -20px rgba(0, 150, 180, 0.22);
  overflow: hidden;
  transition:
    transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1),
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}

.marquee-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, transparent 40%, color-mix(in srgb, var(--accent) 8%, transparent) 100%);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.marquee-card:hover {
  transform: translateY(-6px) scale(1.03);
  border-color: color-mix(in srgb, var(--accent) 35%, transparent);
  box-shadow:
    0 8px 16px -4px rgba(15, 40, 60, 0.06),
    0 28px 56px -24px color-mix(in srgb, var(--accent) 45%, transparent);
}

.marquee-card:hover::before {
  opacity: 1;
}

.card-glow {
  position: absolute;
  bottom: -20px;
  left: 50%;
  width: 80px;
  height: 40px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: var(--accent);
  filter: blur(24px);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.marquee-card:hover .card-glow {
  opacity: 0.35;
}

.card-label {
  position: relative;
  z-index: 1;
  font-size: 13.5px;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  color: #5b6b7e;
  transition: color 0.3s ease;
}

.marquee-card:hover .card-label {
  color: #0A1628;
}

.tech-icon {
  position: relative;
  z-index: 1;
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  font-size: 72px;
  transition: transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
}

.marquee-card:hover .tech-icon {
  transform: scale(1.12);
}

.tech-icon :deep(svg) {
  width: 72px !important;
  height: 72px !important;
}

@media (min-width: 640px) {
  .marquee-card {
    width: 164px;
    padding: 32px 22px 28px;
  }

  .tech-icon,
  .tech-icon :deep(svg) {
    width: 80px !important;
    height: 80px !important;
    font-size: 80px;
  }

  .card-label {
    font-size: 14.5px;
  }
}

@keyframes marquee-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track--left {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1240px;
    margin-inline: auto;
    padding-inline: 1rem;
    gap: 1rem;
  }

  .marquee-row {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding-left: 0;
  }

  .marquee-row[aria-hidden='true'] {
    display: none;
  }

  .marquee-fade {
    display: none;
  }
}
</style>
