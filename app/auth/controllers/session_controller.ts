import User from '#auth/models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async store({ request, auth }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
  }

  async destroy({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    response.status(200).send('Logged out successfully')
  }
}
