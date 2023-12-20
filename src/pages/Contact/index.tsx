import { Box, Stack } from '@mui/joy';

const Contact = () => {
  return (
    <div>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}>
        <Box sx={{ fontSize: '2rem' }}>Contact</Box>
        <Box sx={{ fontSize: '1.5rem' }}>
          Email: {' '}
          <a target='_blank' href="mailto:contact@bykowskiolaf.dev">contact@bykowskiolaf.dev</a>
        </Box>
        <Box sx={{ fontSize: '1.5rem' }}>
          GitHub: {' '}
          <a target='_blank' href="https://www.github.com/BykowskiOlaf">@BykowskiOlaf</a>
        </Box>
        <Box sx={{ fontSize: '1.5rem' }}>
          LinkedIn: {' '}
          <a target='_blank' href="https://www.linkedin.com/in/bykowskiolaf">Olaf Bykowski</a>
        </Box>
      </Stack>
    </div>
  );
};

export default Contact;
