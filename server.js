const jsonServer = require('json-server')
const server = jsonServer.create()

const { readFileSync } = require('fs')
const { join } = require('path')
const file = jsonServer.router(readFileSync(join(__dirname, 'db.json'), 'utf8'))
const router = file
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(9229, () => {
    console.log('JSON Server is running')
})
