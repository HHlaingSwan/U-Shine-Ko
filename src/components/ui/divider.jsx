import React from 'react';
import { cn } from '@/lib/utils';

const Divider = ({ className }) => {
  return (
    <div className={cn('flex-shrink-0 bg-yellow-400 w-1 h-full', className)} />
  );
};

export default Divider;
