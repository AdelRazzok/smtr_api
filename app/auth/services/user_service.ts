import User from '#auth/models/user'

export default class UserService {
  async all() {
    return User.all()
  }

  async find(id: number) {
    return User.findOrFail(id)
  }

  async create(data: any) {
    return User.create(data)
  }

  async update(id: number, data: any) {
    const user = await User.findOrFail(id)
    user.merge(data)
    await user.save()
    return user
  }

  async delete(id: number) {
    const user = await User.findOrFail(id)
    await user.delete()
  }
}
