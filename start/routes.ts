import router from '@adonisjs/core/services/router'
const SessionController = () => import('#auth/controllers/session_controller')

router.get('/', async ({ response }) => response.ok({ uptime: Math.round(process.uptime()) }))
router.get('health', async ({ response }) => response.noContent())

router.get('signin', [SessionController, 'create'])
