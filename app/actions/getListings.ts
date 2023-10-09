import prisma from '@/app/libs/prismadb';

export interface IListingsParams {
  userId?: string;
}

const getListings = async (params: IListingsParams) => {
  try {
    console.log(params);
    const { userId } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getListings;
