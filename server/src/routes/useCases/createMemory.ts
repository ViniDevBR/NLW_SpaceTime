import { prisma } from '../../lib'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'


export async function createMemory(req: FastifyRequest, res: FastifyReply) {
  const bodySchema = z.object({
    content: z.string(),
    coverUrl: z.string(),
    isPublic: z.coerce.boolean().default(false)
  })

  const { content, isPublic, coverUrl } = bodySchema.parse(req.body)

  const newMemory = await prisma.memory.create({
    data: {
      content,
      coverUrl,
      isPublic,
      userId: ''
    }
  })

  return newMemory
}
