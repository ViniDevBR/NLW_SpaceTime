import { prisma } from '../../lib'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'


export async function updateMemory(req: FastifyRequest, res: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid()
  })

  const { id } = paramsSchema.parse(req.params)

  const bodySchema = z.object({
    content: z.string(),
    coverUrl: z.string(),
    isPublic: z.coerce.boolean().default(false)
  })

  const { content, isPublic, coverUrl } = bodySchema.parse(req.body)

  const memory = await prisma.memory.update({
    where: {
      id
    },
    data: {
      content,
      isPublic,
      coverUrl
    }
  })

  return memory
}
