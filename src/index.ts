import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  ctx.body = 'hello koa'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(1000, () => {
  // eslint-disable-next-line no-console
  console.log('running')
})
