import {
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  ListItemContent
} from '@mui/joy';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1
        style={{ fontFamily: 'Autography' }}
        className="text-9xl pt-5">
        {' '}
        Bykowski Olaf
      </h1>
      <div className="block place-self-end">
        <List
          sx={{ '--List-radius': '10px' }}
          className="rounded-xl"
          variant="outlined"
          color="primary"
          size="lg">
          <ListItem>
            <ListItemButton onClick={() => navigate('/projects')}>
              <ListItemContent>Projects</ListItemContent>
            </ListItemButton>

            {/* <ListItemButton>
                    <ListItemContent>Blog</ListItemContent>
                  </ListItemButton> */}
          </ListItem>
          <ListDivider inset="gutter" />
          <ListItem>
            <ListItemButton onClick={() => navigate('/contact')}>
              <ListItemContent>Contact</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListDivider inset="gutter" />
          <ListItem>
            <ListItemButton onClick={() => navigate('/about')}>
              <ListItemContent>About me</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default LandingPage;
