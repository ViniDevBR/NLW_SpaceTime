import { prisma } from '../../lib'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'


export async function memoryById(req: FastifyRequest, res: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid()
  })

  const { id } = paramsSchema.parse(req.params)

  const memory = await prisma.memory.findUniqueOrThrow({
    where: {
      id
    }
  })

  return memory
}
