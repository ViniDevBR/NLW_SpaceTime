import fastify from 'fastify'

const app = fastify()
const port = 3333

app.listen({
  port
}).then(() => {
  console.log(`SERVER TA RODANDO MONSTRAO NA PORTA ${port} ---> http://localhost:3333`)
})

app.get('/hello', () => 'hello')

