import prisma from '@/app/libs/prismadb';

interface IParams {
  listingId?: string;
}

const getListing = async (params: IParams) => {
  try {
    const { listingId } = params;

    const listing = await prisma.listing.findUnique({
      where: { id: listingId },
      include: { user: true },
    });
    if (!listing) {
      return null;
    }
    return listing;
    // or (if there is a warning in the console)
    // return {
    //   ...listing,
    //   createdAt: listing?.createdAt.toISOString()
    //   user:{
    //   createdAt: listing?.user.createdAt.toISOString()
    //   updatedAt: listing?.user.updatedAt.toISOString()
    // }

    // }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getListing;
