export type ProjectData = {
  uuid: string
  image: { url: string }
  title: string
  description: string
  explanation: string
  projectUrl: string
  githubUrl: string
  cardSize: 'normal' | 'medium' | 'wide'
  order: number
  stacks: { uuid: string; stackName: string }[]
}
