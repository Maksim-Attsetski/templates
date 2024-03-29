import React, { FC, memo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { screens } from 'pages';
import { routeNames } from './types';
import { Layout } from 'widgets/Layout';

const Navigation: FC = () => {
  const getAll = async (): Promise<void> => {};

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<screens.Home />} path={routeNames.Home} />
          <Route element={<screens.Notfound />} path={routeNames.Notfound} />
        </Route>
      </Routes>
    </>
  );
};

export default memo(Navigation);
