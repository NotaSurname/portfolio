export type ExperienceData = {
  uuid: string
  role: string
  company: string
  location: string
  period: string
  description: string
  stacks: { uuid: string; stackName: string }[]
}
