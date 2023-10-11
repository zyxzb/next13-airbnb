import getCurrentUser from '@/app/actions/getCurrentUser';
import getListing from '@/app/actions/getListingById';
import getAllListings from '@/app/actions/getAllListings';
import EmptyState from '@/app/components/EmptyState';
import ListingClient from './ListingClient';
import getReservations from '@/app/actions/getReservations';

import { Listing } from '@prisma/client';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface IParams {
  listingId?: string;
}
export const revalidate = 600;

export const generateStaticParams = async () => {
  const allListings = await getAllListings();
  return allListings.map((listing: Listing) => ({
    listingId: listing.id,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: IParams;
}): Promise<Metadata> => {
  const listing = await getListing(params);

  if (!listing) {
    return notFound();
  }

  return {
    title: `${listing.title} | Airbnb`,
    description: listing.description,
  };
};

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListing(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <ListingClient
      listing={listing}
      reservations={reservations}
      currentUser={currentUser}
    />
  );
};

export default ListingPage;
