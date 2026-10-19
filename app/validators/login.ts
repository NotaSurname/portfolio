import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const loginValidatorMessages = new SimpleMessagesProvider({
  'email.required': "L'adresse email est nécessaire",
  'email.email': "L'adresse email n'est pas valide",
  'password.required': 'Le mot de passe est nécessaire',
})

export const loginValidator = vine.create({
  email: vine.string().email(),
  password: vine.string(),
})

loginValidator.messagesProvider = loginValidatorMessages
