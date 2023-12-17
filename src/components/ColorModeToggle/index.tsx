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
        top: '2rem'
      }}
      checked={mode === 'dark'}
      onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
      size={40}
    />
  );
};

export default ColorModeToggle;
