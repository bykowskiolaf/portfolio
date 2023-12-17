import { useColorScheme } from '@mui/joy';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ColorModeToggle = () => {
  const { mode, setMode } = useColorScheme();

  return (
      <DarkModeSwitch
        style={{
          marginBottom: '2rem',
          position: 'absolute',
          right: '2rem',
          top: '2rem',
          zIndex: 100
        }}
        checked={mode === 'light'}
        onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
        size={40}
      />
  );
};

export default ColorModeToggle;
