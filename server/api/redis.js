/* eslint-disable no-console */
const redis = require('redis')

const host = process.env.REDIS_HOST || '127.0.0.1'
const port = process.env.REDIS_PORT || 6379
console.log(host, port)
const client = redis.createClient(port, host)

client.on('error', error => {
  console.error(error)
})

client.on('connect', () => {
  console.log('redis connected')
})

client.on('reconnecting', () => {
  console.log('redis reconnecting')
})

const hmsetUtil = jsons => {
  jsons.forEach((item) => {
    client.hmset(item.name,
      'code', (item.code || ''),
      'name', (item.name || ''),
      'provinceCode', (item.provinceCode || ''),
      'fullname', (item.fullname || '')
    )
  })
}

module.exports = {
  client,
  hmsetUtil
}
