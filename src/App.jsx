import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes';
import RootContainer from './pages/RootContainer/RootContainer';

const App = () => {
  return (
    <RouterProvider router={router}>
      <RootContainer />
    </RouterProvider>
  );
};

export default App;
