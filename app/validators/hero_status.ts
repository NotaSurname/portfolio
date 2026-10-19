import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const updateHeroStatusValidator = vine.compile(
  vine.object({
    isActive: vine.boolean(),
    text: vine.string().trim().minLength(3).maxLength(100),
  })
)

updateHeroStatusValidator.messagesProvider = new SimpleMessagesProvider({
  'required': 'Le champ {{ field }} est obligatoire',
  'text.minLength': 'Le texte doit contenir au moins {{ min }} caractères',
  'text.maxLength': 'Le texte ne peut pas dépasser {{ max }} caractères',
  'isActive.boolean': 'La valeur du statut est invalide',
})
