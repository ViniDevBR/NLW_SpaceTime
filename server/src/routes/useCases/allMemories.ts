import { prisma } from '../../lib'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function allMemories(req: FastifyRequest, res: FastifyReply) {
  const memories = await prisma.memory.findMany({
    orderBy: {
      createdAt: 'asc'
    }
  })

  return memories.map(item => {
    return {
      id: item.id,
      coverUrl: item.coverUrl,
      excerpt: item.content.substring(0, 120).concat('...')
    }
  })
}
