import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../router/routes';

import CriticalErrorMessage from './criricalErrorMessage';




const AppRouter = () => {
  return (
    <Routes>
        {publicRoutes.map((route) => (
            <Route 
                key={route.path}
                path={route.path}
                element={<route.component />}
                exact={route.exact}
            />
        ))}

      <Route path="*" element={<CriticalErrorMessage message="Страница не найдена. Код ошибки: 404" />} />
    </Routes>
  )
}

export default AppRouter;
