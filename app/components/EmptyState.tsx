'use client';

import { useRouter } from 'next/navigation';
import Heading from './Heading';
import Button from './Button';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  showBack?: boolean;
}

const EmptyState = ({
  title = 'No exact marches',
  subtitle = 'Try changing or removing some of Your filters',
  showReset,
  showBack,
}: EmptyStateProps) => {
  const router = useRouter();

  return (
    <div className='h-[60vh] flex flex-col justify-center items-center gap-2'>
      <Heading title={title} subtitle={subtitle} center />
      <div className='w-48 mt-4'>
        {showReset && (
          <Button
            outline
            label='Remove all filters'
            onClick={() => router.push('/')}
          />
        )}
        {showBack && (
          <Button outline label='Go back' onClick={() => router.back()} />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
