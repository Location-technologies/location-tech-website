export function useScrollReveal() {
  const el = ref<HTMLElement | null>(null)
  const isMounted = ref(false)
  const isIntersecting = ref(false)
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  onMounted(() => {
    isMounted.value = true
  })

  useIntersectionObserver(
    el,
    ([entry]) => {
      if (entry?.isIntersecting)
        isIntersecting.value = true
    },
    { threshold: 0.15 },
  )

  // Stay visible during SSR and hydration so markup matches the server.
  const isVisible = computed(() => {
    if (!isMounted.value) return true
    if (prefersReducedMotion.value) return true
    return isIntersecting.value
  })

  return { el, isVisible }
}
