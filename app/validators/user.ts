import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const emailRule = () => vine.string().trim().email().toLowerCase().maxLength(255)

export const createUserValidator = vine.create({
  email: emailRule().unique(async (db, value) => {
    const user = await db.from('users').where('email', value).first()
    return !user
  }),
  isAdmin: vine.boolean(),
  password: vine
    .string()
    .minLength(12)
    .maxLength(128)
    .confirmed({ confirmationField: 'confirmPassword' }),
})

export const updateUserValidator = vine.withMetaData<{ userUuid: string }>().create({
  email: emailRule().unique(async (db, value, field) => {
    const user = await db
      .from('users')
      .where('email', value)
      .whereNot('uuid', field.meta.userUuid)
      .first()
    return !user
  }),
  isAdmin: vine.boolean(),
  password: vine
    .string()
    .minLength(12)
    .maxLength(128)
    .confirmed({ confirmationField: 'confirmPassword' })
    .optional(),
})

export const userValidatorMessages = new SimpleMessagesProvider(
  {
    'required': 'Le champ {{ field }} est requis.',
    'string': 'Le champ {{ field }} doit être un texte.',
    'boolean': 'Le champ {{ field }} doit être vrai ou faux.',
    'minLength': 'Le champ {{ field }} doit contenir au moins {{ min }} caractères.',
    'maxLength': 'Le champ {{ field }} ne doit pas dépasser {{ max }} caractères.',

    'email.required': "L'email est requis.",
    'email.email': "L'email n'est pas valide.",
    'email.unique': 'Cet email est déjà utilisé.',

    'isAdmin.required': 'Les droits administrateur sont requis.',

    'password.required': 'Le mot de passe est requis.',
    'password.minLength': 'Le mot de passe doit contenir au moins {{ min }} caractères.',
    'password.maxLength': 'Le mot de passe ne doit pas dépasser {{ max }} caractères.',
    'password.confirmed': 'Les mots de passe ne correspondent pas.',
  },
  {
    email: 'email',
    isAdmin: 'droits administrateur',
    password: 'mot de passe',
    confirmPassword: 'confirmation du mot de passe',
  }
)

createUserValidator.messagesProvider = userValidatorMessages
updateUserValidator.messagesProvider = userValidatorMessages
