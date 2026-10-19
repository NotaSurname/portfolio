import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'
import mail from '@adonisjs/mail/services/main'
import env from '#start/env'
import { contactValidator } from '#validators/contact'
import limiter from '@adonisjs/limiter/services/main'

export default class ContactController {
  async store({ request, response, session }: HttpContext) {
    const { name, email, object, message } = await request.validateUsing(contactValidator)

    const contactLimiter = limiter.use({
      requests: 5,
      duration: '5 min',
    })

    const key = `contact_${request.ip()}`

    try {
      const send = await contactLimiter.attempt(key, async () => {
        await mail.send((mailMessage) => {
          mailMessage
            .to(String(env.get('CONTACT_TO')))
            .replyTo(email, name)
            .subject(object || `Nouveau message de ${name}`)
            .text(`De : ${name} <${email}>\n\n${message}`)
        })
        return true
      })

      if (!send) {
        const seconds = await contactLimiter.availableIn(key)
        session.flash(
          'error',
          `Trop de tentative envoyés. Réessayer dans ${Math.ceil(seconds / 60)} minutes ${seconds % 60} s.`
        )
      }
    } catch (error) {
      logger.error({ err: error }, "Échec de l'envoi du mail de contact")
      session.flash('error', "L'envoi a échoué, réessayez dans quelques instants.")
    }

    return response.redirect().back()
  }
}
