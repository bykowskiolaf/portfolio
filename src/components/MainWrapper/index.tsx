import { Breadcrumbs, Link, Sheet } from '@mui/joy';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

const MainWrapper = ({ children }: { children?: ReactNode }) => {

  const location = useLocation().pathname.split('/').filter(item => item !== '');

  return (
    <div className="text-main relative flex w-screen h-screen justify-center items-center z-50">
      <Sheet
        variant="outlined"
        className="p-5 w-5/6 h-5/6 rounded-2xl">
        {location.length !== 0 && (
          <Breadcrumbs separator=">" aria-label="breadcrumbs">
            <Link
              color="neutral"
              href="/">
              Home
            </Link>
            {location.map((item: string) => (
              <Link
                key={item}
                color="neutral"
                href={`/${item}`}>
                {item[0].toUpperCase() + item.slice(1).toLowerCase()}
              </Link>
            ))}
          </Breadcrumbs>
        )}
        <div className="w-full h-full">{children}</div>
      </Sheet>
    </div>
  );
};

export default MainWrapper;
