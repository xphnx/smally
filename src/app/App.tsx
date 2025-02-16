import { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss'
import { classNames } from '@shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';


export const App: FC = () => {
  const { theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={() => toggleTheme()}>Toggle theme</button>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <AppRouter />
    </div>
  )
}