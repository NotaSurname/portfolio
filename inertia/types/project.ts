export type ProjectData = {
  uuid: string
  image: { url?: string | undefined }
  title: string
  description: string
  explanation: string
  projectUrl: string | null
  githubUrl: string | null
  cardSize: 'normal' | 'medium' | 'wide'
  order: number
  stacks: { uuid: string; stackName: string }[]
}
