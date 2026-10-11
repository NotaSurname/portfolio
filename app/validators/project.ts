import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const projectFields = {
  title: vine.string().trim().minLength(2).maxLength(255),
  description: vine.string().trim().minLength(10).maxLength(255),
  explanation: vine.string().trim().minLength(20),
  stacks: vine
    .array(vine.string().trim().minLength(1).maxLength(50))
    .minLength(1)
    .maxLength(20)
    .distinct(),
  cardSize: vine.enum(['normal', 'medium', 'wide']),
}

const imageRules = { size: '5mb', extnames: ['jpg', 'jpeg', 'png', 'webp'] }

export const createProjectValidator = vine.create({
  ...projectFields,
  image: vine.file(imageRules),
  projectUrl: vine.string().trim().url().maxLength(2000).optional(),
  githubUrl: vine.string().trim().url().maxLength(2000).optional(),
})

export const updateProjectValidator = vine.create({
  ...projectFields,
  image: vine.file(imageRules).optional(),
  projectUrl: vine.string().trim().url().maxLength(2000).nullable(),
  githubUrl: vine.string().trim().url().maxLength(2000).nullable(),
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
    'array': 'Le champ {{ field }} doit être une liste.',

    'title.required': 'Le titre est requis.',
    'image.required': "L'image du projet est requise.",
    'stacks.required': 'Ajoute au moins une stack.',
    'stacks.minLength': 'Ajoute au moins une stack.',
    'stacks.maxLength': 'Tu ne peux pas ajouter plus de {{ max }} stacks.',
    'stacks.distinct': 'Une même stack ne peut pas être ajoutée deux fois.',

    'stacks.*.minLength': 'Le nom d’une stack ne peut pas être vide.',
    'stacks.*.maxLength': 'Le nom d’une stack ne doit pas dépasser {{ max }} caractères.',
  },
  {
    'title': 'titre',
    'description': 'description',
    'explanation': 'explication',
    'image': 'image',
    'stacks': 'stacks',
    'stacks.*': 'nom de stack',
    'projectUrl': 'lien du projet',
    'githubUrl': 'lien GitHub',
    'cardSize': 'taille de la card',
  }
)
