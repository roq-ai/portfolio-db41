import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { betValidationSchema } from 'validationSchema/bets';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.bet
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getBetById();
    case 'PUT':
      return updateBetById();
    case 'DELETE':
      return deleteBetById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getBetById() {
    const data = await prisma.bet.findFirst(convertQueryToPrismaUtil(req.query, 'bet'));
    return res.status(200).json(data);
  }

  async function updateBetById() {
    await betValidationSchema.validate(req.body);
    const data = await prisma.bet.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteBetById() {
    const data = await prisma.bet.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
