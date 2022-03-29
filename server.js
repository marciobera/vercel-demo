const jsonServer = require('json-server')
const server = jsonServer.create()

// const path = require('path')
const db = require('./db')
const router = jsonServer.router(db);//jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

