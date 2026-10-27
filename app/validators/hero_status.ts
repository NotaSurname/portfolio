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

export const updateHeroPhotoValidator = vine.create({
  image: vine.file({ size: '5mb', extnames: ['jpg', 'jpeg', 'png', 'webp'] }).optional(),
  isPhotoVisible: vine.boolean(),
})

updateHeroPhotoValidator.messagesProvider = new SimpleMessagesProvider({
  'required': 'Le champ {{ field }} est obligatoire',
  'file.size': "L'image ne doit pas dépasser 5 Mo.",
  'file.extname': "L'image doit être au format JPG, PNG ou WebP.",
  'isPhotoVisible.boolean': 'La valeur de visibilité est invalide.',
})
