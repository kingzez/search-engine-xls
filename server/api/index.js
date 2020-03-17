/* eslint-disable no-console */
const { promisify } = require('util')
const Router = require('koa-router')
const readXlsx = require('./read-xlsx')
const { client } = require('./redis')

const hgetallAsync = promisify(client.hgetall).bind(client)

const router = new Router()

router.get('/s', async (ctx) => {
  console.log(ctx.query)
  const { keywords } = ctx.query
  if (!keywords) return

  let result
  try {
    result = await hgetallAsync(keywords)
    if (result) {
      ctx.body = result
      console.log('result from read cache', result)
      return
    }
    const db = await readXlsx()
    result = db.find(v => keywords === v.name)
    console.log('result from read file', result)
    ctx.body = result || { msg: '无数据' }
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
