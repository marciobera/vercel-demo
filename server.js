const jsonServer = require('json-server')
const server = jsonServer.create()

const fs = require('fs')
const path = require('path')
fs.chmodSync(path.join(__dirname, 'db.json'), '755');
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

