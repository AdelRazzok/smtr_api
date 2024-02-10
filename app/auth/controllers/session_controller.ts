import { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async create({ request }: HttpContext) {}

  async store({ request }: HttpContext) {}

  async destroy({ params }: HttpContext) {}
}
