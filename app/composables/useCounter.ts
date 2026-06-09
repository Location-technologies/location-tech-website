/**
 * Animated stat counter for HomeStats.
 * Phase 3+: animate count from 0 → target over duration ms.
 */
export function useCounter(target: number, duration = 2000) {
  const count = ref(0)
  const isRunning = ref(false)

  const start = () => {
    count.value = target
    isRunning.value = true
  }

  return { count, isRunning, start, target, duration }
}
