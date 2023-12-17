import {
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  ListItemContent,
  Sheet
} from '@mui/joy';

const LandingPage = () => {
  return (
    <>
        <Sheet
          variant="outlined"
          className="flex justify-between p-5 w-5/6 h-5/6 rounded-2xl">
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
    </>
  );
};

export default LandingPage;
