import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const aboutParagraphValidator = vine.create({
  content: vine.string().trim().minLength(10).maxLength(2000),
})

aboutParagraphValidator.messagesProvider = new SimpleMessagesProvider({
  'content.required': 'Le paragraphe est obligatoire.',
  'content.string': 'Le paragraphe doit être du texte.',
  'content.minLength': 'Le paragraphe doit contenir au moins {{ min }} caractères.',
  'content.maxLength': 'Le paragraphe ne peut pas dépasser {{ max }} caractères.',
})

export const reorderAboutValidator = vine.create({
  uuids: vine.array(vine.string().uuid()).minLength(1),
})
