'use client';

import Image from 'next/image';

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <Image
      className='rounded-full'
      width={30}
      height={30}
      src={src || '/images/placeholder.jpg'}
      alt='avatar'
    />
  );
};

export default Avatar;
