/* eslint-disable no-console */
const Router = require('koa-router')
const readXlsx = require('./read-xlsx')

const router = new Router()

router.get('/search', async (ctx) => {
  console.log(ctx.query)

  const { keywords } = ctx.query
  if (!keywords) { return }

  const db = await readXlsx()
  const result = db.find(v => keywords === v.name)
  console.log(result)
  ctx.body = result || { msg: '无数据' }
})

module.exports = router
