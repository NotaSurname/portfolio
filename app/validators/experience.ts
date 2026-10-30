import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const experienceValidator = vine.create({
  role: vine.string().trim().minLength(2).maxLength(255),
  company: vine.string().trim().minLength(1).maxLength(255),
  location: vine.string().trim().minLength(1).maxLength(255),
  period: vine.string().trim().minLength(5).maxLength(50),
  description: vine.string().trim().minLength(10).maxLength(1000),
  stacks: vine
    .array(vine.string().trim().minLength(1).maxLength(50))
    .maxLength(20)
    .distinct()
    .optional(),
})

export const experienceValidatorMessages = new SimpleMessagesProvider(
  {
    'required': 'Le champ {{ field }} est requis.',
    'string': 'Le champ {{ field }} doit être un texte.',
    'minLength': 'Le champ {{ field }} doit contenir au moins {{ min }} caractères.',
    'maxLength': 'Le champ {{ field }} ne doit pas dépasser {{ max }} caractères.',
    'array': 'Le champ {{ field }} doit être une liste.',

    'role.required': 'Le rôle est requis.',
    'company.required': "L'entreprise ou l'agence est obligatoire.",
    'location.required': 'La localisation est requise.',
    'period.required': 'La période est requise.',
    'description.required': 'La description est requise.',
    'stacks.maxLength': 'Tu ne peux pas ajouter plus de {{ max }} stacks.',
    'stacks.distinct': 'Une même stack ne peut pas être ajoutée deux fois.',

    'stacks.*.minLength': 'Le nom d’une stack ne peut pas être vide.',
    'stacks.*.maxLength': 'Le nom d’une stack ne doit pas dépasser {{ max }} caractères.',
  },
  {
    'role': 'rôle',
    'company': 'entreprise ou agence',
    'location': 'lieu',
    'period': 'période',
    'description': 'description',
    'stacks': 'stacks',
    'stacks.*': 'nom de stack',
  }
)

experienceValidator.messagesProvider = experienceValidatorMessages
