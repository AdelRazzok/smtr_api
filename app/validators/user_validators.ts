import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    username: vine.string().trim().minLength(3).maxLength(32),
    email: vine.string().email(),
    password: vine.string(),
  })
)
