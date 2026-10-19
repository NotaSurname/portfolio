import { BaseSeeder } from '@adonisjs/lucid/seeders'
import About from '#models/about'

export default class extends BaseSeeder {
  async run() {
    await About.createMany([
      {
        content:
          "Salut, je m'appelle {name}, je suis un développeur français de {age} ans. Je suis passionné par la programmation et toujours à la recherche de nouveaux défis.",
        order: 0,
      },
      {
        content:
          "Tout a commencé lors de mon stage de troisième, où j'ai créé ma première wishlist en " +
          "HTML, CSS, JavaScript, PHP et MySQL. Ça a été le déclic : j'ai voulu comprendre comment tout ça " +
          "fonctionnait et j'ai continué à apprendre de mon côté, jusqu'à en faire mon métier.",
        order: 1,
      },
      {
        content:
          "Je suis actuellement en Bachelor Développeur à l'Efrei, en France, et je suis à la " +
          "recherche d'un stage pour continuer à progresser sur des projets concrets. " +
          'Mon objectif : évoluer vers des projets ambitieux et en faire un véritable métier qui me permette de vivre de ma passion.',
        order: 2,
      },
    ])
  }
}
