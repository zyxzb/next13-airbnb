import prisma from '@/app/libs/prismadb';

const getAllListings = async () => {
  const listings = await prisma.listing.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return listings;
};

export default getAllListings;
