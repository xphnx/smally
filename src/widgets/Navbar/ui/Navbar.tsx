import { FC } from 'react';

import { classNames } from '@shared/lib';
import { AppLink } from '@shared/ui';

import clsses from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(clsses.navbar, {}, [className])}>
        <div className={clsses.links}>
          <AppLink to="/">Main</AppLink>
          <AppLink to="/about">About</AppLink>
        </div>
    </div>
  )
}