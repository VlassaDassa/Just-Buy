import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';

import CriticalErrorMessage from './../components/General/criticalErrorMessage'





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

          {localStorage.getItem('user_id') && privateRoutes.map((route) => (
              <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                  exact={route.exact}
              />
          ))}
                    
        
          <Route path="*" element={<CriticalErrorMessage message="Страница не найдена. Код ошибки: 404" />} />
      </Routes>
  );
};

export default AppRouter;
