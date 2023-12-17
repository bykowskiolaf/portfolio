import {
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  ListItemContent,
  Sheet
} from '@mui/joy';

import ColorModeToggle from '../../components/ColorModeToggle';

const LandingPage = () => {
  return (
    <>
      <div className="text-main relative flex w-screen h-screen justify-center items-center z-50">
        <Sheet
          variant="outlined"
          className="flex justify-between p-5 w-5/6 h-5/6 rounded-2xl">
          <h1
            style={{ fontFamily: 'Just Another Hand' }}
            className="text-9xl">
            {' '}
            Bykowski Olaf
          </h1>
          <ColorModeToggle />
          <div className="block place-self-end">
            <List
              sx={{ '--List-radius': '10px' }}
              className="rounded-xl"
              variant="outlined"
              color="primary"
              size="lg">
              <ListItem>
                <ListItemButton>
                  <ListItemContent>Projects</ListItemContent>
                </ListItemButton>

                {/* <ListItemButton>
                    <ListItemContent>Blog</ListItemContent>
                  </ListItemButton> */}
              </ListItem>
              <ListDivider inset="gutter" />
              <ListItem>
                <ListItemButton>
                  <ListItemContent>Contact</ListItemContent>
                </ListItemButton>
              </ListItem>
              <ListDivider inset="gutter" />
              <ListItem>
                <ListItemButton>
                  <ListItemContent>About me</ListItemContent>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Sheet>
      </div>
    </>
  );
};

export default LandingPage;
