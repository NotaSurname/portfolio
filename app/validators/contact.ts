import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const contactValidator = vine.create({
  name: vine.string().trim().minLength(2).maxLength(100),
  email: vine.string().trim().email(),
  object: vine.string().trim().maxLength(150).optional(),
  message: vine.string().trim().minLength(10).maxLength(2000),
})

contactValidator.messagesProvider = new SimpleMessagesProvider(
  {
    required: 'Le champ {{ field }} est obligatoire.',
    string: 'Le champ {{ field }} doit être du texte.',
    email: "Cette adresse email n'est pas valide.",
    minLength: 'Le {{ field }} doit contenir au moins {{ min }} caractères.',
    maxLength: 'Le {{ field }} ne doit pas dépasser {{ max }} caractères.',
  },
  {
    name: 'nom',
    email: 'email',
    object: 'objet',
    message: 'message',
  }
)
