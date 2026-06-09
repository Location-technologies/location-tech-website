/**
 * Stub for GSAP / @vueuse/motion scroll-triggered animations.
 * Phase 3+: wire to IntersectionObserver + GSAP timeline.
 */
export function useScrollAnimation() {
  const isVisible = ref(false)

  const register = (_el: HTMLElement | null) => {
    // stub — attach scroll observer in Phase 3
  }

  const play = () => {
    isVisible.value = true
  }

  return { isVisible, register, play }
}
