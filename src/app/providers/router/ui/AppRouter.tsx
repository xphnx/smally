import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '@shared/config';

export const AppRouter: FC = () => {
  return (
    <Routes>
        {Object.values(routes).map(({ path, element }) => <Route key={path} element={element} path={path} />)}
    </Routes>
  )
}