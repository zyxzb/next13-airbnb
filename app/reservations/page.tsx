import EmptyState from '../components/EmptyState';
import ReservationsClient from './ReservationsClient';
import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title='Unauthorized' subtitle='Please login' />;
  }

  // all reservations that people were made on our listings
  const reservations = await getReservations({
    authorId: currentUser?.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title='No reservations found'
        subtitle='Looks like you have no reservations on your properties'
      />
    );
  }

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
};

export default ReservationsPage;
