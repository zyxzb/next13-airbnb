import EmptyState from '../components/EmptyState';
import getCurrentUser from '../actions/getCurrentUser';
import getFavoritesListings from '../actions/getFavoriteListings';
import FavoritesClient from './FavoritesClient';

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoritesListings();

  if (!currentUser) {
    return <EmptyState title='Unauthorized' subtitle='Please login' />;
  }

  if (listings.length === 0) {
    return (
      <EmptyState
        title='No Favorites found'
        subtitle='Looks like you have no favorites listings.'
      />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default FavoritesPage;
