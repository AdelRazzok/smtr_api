import User from '#auth/models/user'
import { createUserValidator, updateUserValidator } from '#validators/user_validators'

export default class UserService {
  async all() {
    return User.all()
  }

  async find(id: number) {
    return User.findOrFail(id)
  }

  async create(data: {}) {
    const payload = await createUserValidator.validate(data)
    return User.create(payload)
  }

  async update(id: number, data: {}) {
    const currentUser = await User.findOrFail(id)
    const payload = await updateUserValidator.validate(data)
    const newUser = await currentUser.merge(payload).save()
    return newUser
  }

  async delete(id: number) {
    const user = await User.findOrFail(id)
    await user.delete()
  }
}
