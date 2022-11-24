import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import AnimeList from '../../pages/AnimeList/AnimeList';
import NotFound from '../../pages/NotFound/NotFound';
import AnimePage from '../../pages/AnimePage/AnimePage';
import Page from '../Page/Page';

const App: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Page>
            <Home />
          </Page>
        }
      />
      <Route
        path="/animelist"
        element={
          <Page>
            <AnimeList />
          </Page>
        }
      />
      <Route
        path="/animelist/:id"
        element={
          <Page>
            <AnimePage />
          </Page>
        }
      />
      <Route
        path="*"
        element={
          <Page>
            <NotFound />
          </Page>
        }
      />
    </Routes>
  );
};

export default App;
