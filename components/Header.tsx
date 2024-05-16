'use client';

import React, { useState } from 'react';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/app/contants';
import { UserMenu } from './UserMenu';
import Burger from './Burger/Burger';
import { AnimatePresence } from 'framer-motion';
import Stairs from './Stairs/Stairs';
import Menu from './Menu/Menu';

type HeaderPropsType = {};

export const Header: React.FC<HeaderPropsType> = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="flex w-full justify-between items-center p-4 border-b border-gray-300 dark:border-gray-800 h-20 text-sm">
      <Link href={PAGE_ROUTES.HOME} className="text-primary font-bold text-lg">
        ATF
      </Link>
      <div className="flex gap-6 items-center">
        <Link href={PAGE_ROUTES.DASHBOARD}>Dashboard</Link>
        <ModeToggle />
        <UserMenu />
        <Burger
          openMenu={() => {
            setMenuIsOpen(true);
          }}
        />
        <AnimatePresence mode="wait">
          {menuIsOpen && (
            <>
              <Stairs />
              <Menu
                closeMenu={() => {
                  setMenuIsOpen(false);
                }}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
