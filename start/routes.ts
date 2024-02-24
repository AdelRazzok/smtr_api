import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const TokensController = () => import('#auth/controllers/tokens_controller')
const UsersController = () => import('#auth/controllers/users_controller')

router.get('/', async ({ response }) => {
  return response.status(200).send({ uptime: Math.round(process.uptime()) })
})
router.get('health', async ({ response }) => response.noContent())

router
  .group(() => {
    router.post('signup', [UsersController, 'create'])
    router.post('signin', [TokensController, 'store'])
    router.get('signout', [TokensController, 'destroy']).use(middleware.auth({ guards: ['api'] }))
  })
  .prefix('api/v1')

router
  .group(() => {
    router.get('users', [UsersController, 'index'])
    router.get('users/:id', [UsersController, 'show'])
    router.post('users', [UsersController, 'create'])
    router.put('users/:id', [UsersController, 'update'])
    router.delete('users/:id', [UsersController, 'delete'])
  })
  .prefix('api/v1')
  .use(middleware.auth({ guards: ['api'] }))
