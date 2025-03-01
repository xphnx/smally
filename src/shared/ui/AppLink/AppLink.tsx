import { FC, PropsWithChildren } from 'react';

import { classNames } from '@shared/lib';

import classes from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { AppLinkThemeEnum } from './types';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkThemeEnum
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (
    { to, className, theme = AppLinkThemeEnum.PRIMARY, children, ...props }
) => {
  return (
    <Link to={to} className={classNames(classes.link, {}, [className, classes[theme]])} {...props}>
        {children}
    </Link>
  )
}