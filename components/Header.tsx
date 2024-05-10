import React from 'react';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/app/contants';

type HeaderPropsType = {};

export const Header: React.FC<HeaderPropsType> = () => {
  return (
    <div className="flex w-full justify-between items-center p-4 border-b border-gray-300 dark:border-gray-800 h-20">
      <Link href={PAGE_ROUTES.HOME} className="text-primary font-bold text-lg">
        ATF
      </Link>
      <div className="flex gap-6 items-center">
        <Link href={PAGE_ROUTES.DASHBOARD}>Dashboard</Link>
        <ModeToggle />
      </div>
    </div>
  );
};
