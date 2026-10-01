import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const createProjectValidator = vine.create({
  image: vine.file({
    size: '5mb',
    extnames: ['jpg', 'jpeg', 'png', 'webp'],
  }),
  title: vine.string().trim().minLength(2).maxLength(255),
  description: vine.string().trim().minLength(10).maxLength(255),
  explanation: vine.string().trim().minLength(20),
  stacks: vine
    .array(vine.string().trim().minLength(1).maxLength(50))
    .minLength(1)
    .maxLength(20)
    .distinct(),
  projectUrl: vine.string().trim().url().maxLength(2000).optional(),
  githubUrl: vine.string().trim().url().maxLength(2000).optional(),
  cardSize: vine.enum(['normal', 'medium', 'wide']),
})

createProjectValidator.messagesProvider = new SimpleMessagesProvider(
  {
    'required': 'Le champ {{ field }} est requis.',
    'string': 'Le champ {{ field }} doit être un texte.',
    'minLength': 'Le champ {{ field }} doit contenir au moins {{ min }} caractères.',
    'maxLength': 'Le champ {{ field }} ne doit pas dépasser {{ max }} caractères.',
    'url': 'Le champ {{ field }} doit être une URL valide (https://...).',
    'enum': 'La valeur choisie pour {{ field }} est invalide.',
    'file.size': "L'image ne doit pas dépasser 5 Mo.",
    'file.extname': "L'image doit être au format JPG, PNG ou WebP.",

    'title.required': 'Le titre est requis.',
    'image.required': "L'image du projet est requise.",
    'stacks.required': 'Ajoute au moins une stack.',
    'stacks.minLength': 'Ajoute au moins une stack.',
    'stacks.maxLength': 'Tu ne peux pas ajouter plus de {{ max }} stacks.',
    'stacks.distinct': 'Une même stack ne peut pas être ajoutée deux fois.',
  },
  {
    title: 'titre',
    description: 'description',
    explanation: 'explication',
    image: 'image',
    stacks: 'stacks',
    projectUrl: 'lien du projet',
    githubUrl: 'lien GitHub',
    cardSize: 'taille de la card',
  }
)
