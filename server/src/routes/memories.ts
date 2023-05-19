import { FastifyInstance } from 'fastify'
//USE CASES
import { allMemories } from './useCases/allMemories'
import { memoryById } from './useCases/memoryById'
import { createMemory } from './useCases/createMemory'
import { updateMemory } from './useCases/updateMemory'
import { deletMemory } from './useCases/deletMemory'


export async function memoriesRoutes(app:FastifyInstance) {
  app.get('/memories', allMemories)

  app.get('/memories/:id', memoryById)

  app.post('/memories', createMemory)

  app.put('/memories/:id', updateMemory)

  app.delete('/memories/:id', deletMemory)
}
