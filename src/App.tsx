import '@fontsource/inter';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import theme from './assets/styles/theme';
import ColorModeToggle from './components/ColorModeToggle';
import MainWrapper from './components/MainWrapper';
import MyParticles from './components/Particles';
import LandingPage from './pages/LangingPage';
import ErrorElement from './components/ErrorElement';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LandingPage />,
      errorElement: <ErrorElement />
    },
    {
      path: '/projects',
      element: <div>Projects</div>
    },
    {
      path: '/about',
      element: <div>About</div>
    },
    {
      path: '/contact',
      element: <div>Contact</div>
    }
  ],
  {}
);

function App() {
  return (
    <>
      <CssVarsProvider
        defaultMode="light"
        theme={theme}>
        <CssBaseline />
        <ColorModeToggle />
        <MyParticles />
        <MainWrapper>
          <RouterProvider router={router} />
        </MainWrapper>
      </CssVarsProvider>
    </>
  );
}

export default App;
