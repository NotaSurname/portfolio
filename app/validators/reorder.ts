import vine from '@vinejs/vine'

export const reorderExperiencesValidator = vine.create({
  uuids: vine.array(vine.string().uuid()).minLength(1).maxLength(100).distinct(),
})
