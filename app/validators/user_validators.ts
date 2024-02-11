import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    username: vine.string().trim().minLength(3).maxLength(32),
    email: vine.string().email(),
    avatar: vine.string().url().optional(),
    password: vine.string().minLength(8).maxLength(50),
  })
)

export const updateUserValidator = vine.compile(
  vine.object({
    username: vine.string().trim().minLength(3).maxLength(32),
    email: vine.string().email(),
    avatar: vine.string().url().optional(),
    password: vine.string().minLength(8).maxLength(50).optional(),
  })
)
