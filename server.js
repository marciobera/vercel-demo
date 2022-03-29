const jsonServer = require('json-server')
const server = jsonServer.create()

const path = require('path')
const fs = require('fs')
fs.chmodSync('db.json'), 0o755);
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

