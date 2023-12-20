import Router from '@components/Router';
import '@fontsource/inter';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import { BrowserRouter } from 'react-router-dom';

import theme from './assets/styles/theme';
import ColorModeToggle from './components/ColorModeToggle';
import MainWrapper from './components/MainWrapper';
import MyParticles from './components/Particles';

function App() {
  return (
    <BrowserRouter basename="/">
      <CssVarsProvider
        defaultMode="light"
        theme={theme}>
        <CssBaseline />
        <ColorModeToggle />
        <MyParticles />
        <MainWrapper>
          <Router />
        </MainWrapper>
      </CssVarsProvider>
    </BrowserRouter>
  );
}

export default App;
