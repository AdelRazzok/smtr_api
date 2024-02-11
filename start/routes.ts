import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const SessionController = () => import('#auth/controllers/session_controller')
const UsersController = () => import('#auth/controllers/users_controller')

router.get('/', async ({ response }) => {
  return response.status(200).send({ uptime: Math.round(process.uptime()) })
})
router.get('health', async ({ response }) => response.noContent())

router.post('register', [UsersController, 'create'])
router.post('login', [SessionController, 'store'])
router.get('logout', [SessionController, 'destroy'])

router
  .group(() => {
    router.get('users', [UsersController, 'index'])
    router.get('users/:id', [UsersController, 'show'])
    router.post('users', [UsersController, 'create'])
    router.put('users/:id', [UsersController, 'update'])
    router.delete('users/:id', [UsersController, 'delete'])
  })
  .prefix('api/v1')
  .use(middleware.auth())
