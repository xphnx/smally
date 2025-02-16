import { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { LazyAbout, LazyMain } from '../pages';
import './styles/index.scss'
import { classNames } from '../helpers/classNames';
import { useTheme } from './providers/ThemeProvider';

export const App: FC = () => {
  const { theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={() => toggleTheme()}>Toggle theme</button>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Routes>
            <Route path={'/about'} element={<LazyAbout />} />
            <Route path={'/'} element={<LazyMain />} />
        </Routes>
    </div>
  )
}