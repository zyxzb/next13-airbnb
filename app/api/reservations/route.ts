import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export const POST = async (request: Request) => {
  const currentUser = await getCurrentUser();
  const body = await request.json();

  const { totalPrice, startDate, endDate, listingId } = body;

  if (!currentUser) {
    console.log('no user');
    return NextResponse.error();
  }

  if (!totalPrice || !startDate || !endDate || !listingId) {
    return NextResponse.error();
  }

  const listingAndReservation = await prisma.listing.update({
    where: {
      id: listingId,
    },
    data: {
      reservations: {
        create: {
          userId: currentUser.id,
          startDate,
          endDate,
          totalPrice,
        },
      },
    },
  });

  return NextResponse.json(listingAndReservation);
};
