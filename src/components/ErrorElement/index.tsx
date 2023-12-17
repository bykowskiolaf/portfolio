import { Sheet } from '@mui/joy';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Sheet className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-8xl pb-10">Oops!</h1>
      <h3>Coś poszło nie tak!</h3>
      {isRouteErrorResponse(error) && (
        <p>Błąd: {error?.status + ', ' + (error?.data ? error?.data.slice(7) : null)}</p>
      )}
    </Sheet>
  );
};

export default ErrorElement;
