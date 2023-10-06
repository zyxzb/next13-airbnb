import prisma from '@/app/libs/prismadb';
import { error } from 'console';

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
  // if we are author of property we will see the reservations
}

const getReservations = async (params: IParams) => {
  try {
    const { listingId, userId, authorId } = params;

    let query: any = {};

    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      // e.g. query: { listingId: '65140b75c062c06e028decf1' }
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return reservations;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getReservations;
