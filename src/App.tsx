import '@fontsource/inter';
import { Sheet } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';

import ColorModeToggle from './components/ColorModeToggle';
import MyParticles from './components/Particles';
import theme from './consts/theme';
import LandingPage from './pages/LangingPage';

function App() {
  return (
    <>
      <CssVarsProvider
        defaultMode="light"
        theme={theme}>
        <CssBaseline />
        <ColorModeToggle />
        <Sheet>
          <MyParticles />
          <LandingPage />
        </Sheet>
      </CssVarsProvider>
    </>
  );
}

export default App;
