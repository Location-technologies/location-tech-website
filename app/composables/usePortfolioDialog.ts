export type PortfolioProject = {
  id: number
  slug: string
  title: string
  client: string
  category: string
  shortDesc: string
  description: string
  technologies: string[]
  year: number
  published?: boolean
  status?: 'shipped' | 'in-progress' | 'foundation'
  highlights?: string[]
  deliverables?: {
    name: string
    stack: string
    summary?: string
    status?: 'shipped' | 'in-progress' | 'foundation'
  }[]
  roadmap?: string[]
}

export function usePortfolioDialog() {
  const isOpen = useState('portfolio-dialog-open', () => false)
  const selectedSlug = useState<string | null>('portfolio-dialog-slug', () => null)

  function openProject(slug: string) {
    selectedSlug.value = slug
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
    selectedSlug.value = null
  }

  return { isOpen, selectedSlug, openProject, close }
}
