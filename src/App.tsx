import '@fontsource/inter';
import { Sheet } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';

import ColorModeToggle from './components/ColorModeToggle';
import MyParticles from './components/Particles';
import theme from './assets/styles/theme';
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
          <div className="text-main relative flex w-screen h-screen justify-center items-center z-50">
            <LandingPage />
          </div>
        </Sheet>
      </CssVarsProvider>
    </>
  );
}

export default App;
