const fs = require('fs')
const jsonServer = require('json-server')
// const jwt = require('jsonwebtoken')
const path = require('path')
const middlewares = jsonServer.defaults()
const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
server.use(jsonServer.bodyParser)
const cors = require('cors');

server.use(
cors({
origin: true,
credentials: true,
preflightContinue: false,
methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}),
);
server.options('*', cors());

server.post('/login', (req, res) => {
  const { username, password } = req.body
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
  const { users } = db

  const userFromDb = users.find(
    user => user.username === username && user.password === password
  )

  if (userFromDb) {
    return res.json(userFromDb)
  }

  return res.status(403).json({message: 'AUTH_ERROR'})
})


server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800)
    })

    next()
})

server.use(async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({message: 'AUTH_ERROR'})
    }

    next()
})

server.use(middlewares)
server.use(router)

server.listen(8000, () => {
  console.log('JSON Server is running on 8000 port')
})