import { HttpContext } from '@adonisjs/core/http'
import UserService from '#auth/services/user_service'
import { inject } from '@adonisjs/core'

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}

  async index({ response }: HttpContext) {
    const users = await this.userService.all()
    return response.status(200).send(users)
  }

  async show({ params, response }: HttpContext) {
    const user = await this.userService.find(params.id)
    return response.status(200).send(user)
  }

  async create({ request, response }: HttpContext) {
    await this.userService.create(request.all())
    return response.status(201)
  }

  async update({ params, request, response }: HttpContext) {
    await this.userService.update(params.id, request.all())
    return response.status(204)
  }

  async delete({ params, response }: HttpContext) {
    await this.userService.delete(params.id)
    return response.status(204)
  }
}
