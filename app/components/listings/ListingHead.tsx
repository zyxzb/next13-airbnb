'use client';

import useCountries from '@/app/hooks/useCountries';
import { User } from '@prisma/client';
import Heading from '../Heading';
import Image from 'next/image';
import HeartButton from '../HeartButton';

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: User | null;
}

const ListingHead = ({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser,
}: ListingHeadProps) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className='w-full h-[60vh] overflow-hidden rounded-xl relative'>
        <Image
          alt='image'
          src={imageSrc || '/images/no-image.jpg'}
          fill
          className='object-cover w-full'
        />
        <div className='absolute top-5 right-5'>
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
