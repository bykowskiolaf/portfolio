import ErrorElement from '@components/ErrorElement';
import Contact from '@pages/Contact';
import LandingPage from '@pages/LandingPage';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  const ROUTES = [
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/Projects',
      element: <div>Projects</div>
    },
    {
      path: '/About',
      element: <div>About</div>
    },
    {
      path: '/Contact',
      element: <Contact />
    },
    {
      path: '*',
      element: <ErrorElement />
    }
  ];

  return (
    <>
      <Routes>
        {ROUTES.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </>
  );
};

export default Router;
