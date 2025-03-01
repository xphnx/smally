import { FC } from 'react';
import './styles/index.scss'
import { classNames } from '@shared/lib';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from '@widgets';

export const App: FC = () => {
  const { theme } = useTheme();
  const { toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
        <button onClick={() => toggleTheme()}>Toggle theme</button>
    </div>
  )
}