import EmptyState from '@/app/components/EmptyState';

const notFound = () => {
  return (
    <EmptyState
      title='Page Not Found'
      subtitle='Return to previous page'
      showBack
    />
  );
};

export default notFound;
