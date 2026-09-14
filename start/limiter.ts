/*
|--------------------------------------------------------------------------
| Define HTTP limiters
|--------------------------------------------------------------------------
|
| The "limiter.define" method creates an HTTP middleware to apply rate
| limits on a route or a group of routes. Feel free to define as many
| throttle middleware as needed.
|
*/

import limiter from '@adonisjs/limiter/services/main'

export const throttle = limiter.define('global', () => {
  /**
   * If a user sends an 11th request within one minute,
   * block them for 30 minutes instead of just waiting
   * for the 1-minute window to reset.
   * .blockFor('30 minutes')
   */
  return limiter
    .allowRequests(10)
    .every('1 minute')
    .limitExceeded((error) => {
      error.setStatus(400).setMessage('Trop de tentative. Essaie plus tard')
      error.t('errors.rate_limited', {
        limit: error.response.limit,
        remaining: error.response.remaining,
      })
    })
})

export const apiThrottle = limiter.define('ip', (ctx) => {
  return limiter
    .allowRequests(10)
    .every('1 minute')
    .usingKey(`ip_${ctx.request.ip}`)
    .limitExceeded((error) => {
      error.setStatus(400).setMessage('Trop de tentative. Essaie plus tard')
      error.t('errors.rate_limited', {
        limit: error.response.limit,
        remaining: error.response.remaining,
      })
    })
})
