export type Experiment = {
  title: string
  href: string
  og: string | null
  contributors: Array<{
    url: string
    name: string
  }>
}