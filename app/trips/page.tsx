import EmptyState from '../components/EmptyState';

import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';
import TripsClient from './TripsClient';

const Trips = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title='Unauthorized' subtitle='Please login' />;
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title='No trips found'
        subtitle='Looks like you have not reserved any trips'
      />
    );
  }

  return (
    <div className=''>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </div>
  );
};

export default Trips;
