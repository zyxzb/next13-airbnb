'use client';

import Container from '@/app/components/Container';
import { categories } from '@/app/components/navbar/Categories';
import { Listing, Reservation, User } from '@prisma/client';
import { useMemo } from 'react';

interface ListingClientProps {
  reservations?: Reservation[];
  listing: Listing;
  currentUser?: User | null;
}

const ListingClient = ({ listing, currentUser }: ListingClientProps) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return <Container>Hello</Container>;
};

export default ListingClient;
