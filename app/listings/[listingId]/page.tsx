import getCurrentUser from '@/app/actions/getCurrentUser';
import getListing from '@/app/actions/getListingById';
import EmptyState from '@/app/components/EmptyState';
import ListingClient from './ListingClient';

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListing(params);
  const currentUses = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return <ListingClient listing={listing} currentUser={currentUses} />;
};

export default ListingPage;