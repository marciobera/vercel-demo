const jsonServer = require('json-server')
const server = jsonServer.create()

const path = require('path')
const fs = require('fs')
const file = path.join(__dirname, 'db.json');
fs.chmodSync(file, 0o755);
const router = jsonServer.router(file)

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

