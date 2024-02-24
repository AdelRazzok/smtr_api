import User from '#auth/models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class TokensController {
  async store({ request }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)
    return token
  }

  async destroy({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    await User.accessTokens.delete(user, user.currentAccessToken.identifier)
  }
}
