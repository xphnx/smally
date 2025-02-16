import { FC } from 'react';
import { Link } from 'react-router-dom';

import { classNames } from '@shared/lib';

import * as styles from './Navbar.module.scss';
import { useTheme } from '@app/providers/ThemeProvider';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { toggleTheme } = useTheme();

  
  return (
    <div className={classNames(styles.hovered, {}, [className])}>
        <button onClick={() => toggleTheme()}>Toggle theme</button>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
    </div>
  )
}