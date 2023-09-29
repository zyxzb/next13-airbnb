'use client';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { User } from '@prisma/client';

interface HeartButtonProps {
  listingId: string;
  currentUser?: User | null;
}

const HeartButton = ({ listingId, currentUser }: HeartButtonProps) => {
  const hasFavorites = false;
  const toggleFavorite = () => {};

  return (
    <div
      onClick={toggleFavorite}
      className='relative hover:opacity-80 transition cursor-pointer'
    >
      <AiOutlineHeart
        size={28}
        className='fill-white absolute -top-[2px] -right-[2px]'
      />
      <AiFillHeart
        size={24}
        className={hasFavorites ? 'fill-rose-500' : 'fill-neutral-500/70'}
      />
    </div>
  );
};

export default HeartButton;
