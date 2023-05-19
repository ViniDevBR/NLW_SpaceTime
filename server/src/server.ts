import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
const port = 3333

app.register(memoriesRoutes)

app.register(cors, {
  origin: true
})

app.listen({
  port
}).then(() => {
  console.log(`SERVER TA RODANDO MONSTRAO NA PORTA ${port} ---> http://localhost:3333`)
})
