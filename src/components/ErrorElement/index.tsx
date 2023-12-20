import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="flex flex-col w-full h-full justify-center items-center">
        <h1 className="font-bold text-8xl pb-10">Oops!</h1>
        <h3>Coś poszło nie tak!</h3>
        {isRouteErrorResponse(error) && (
          <p>
            Błąd:{' '}
            {error?.status + ', ' + (error?.data ? error?.data.slice(7) : null)}
          </p>
        )}
      </div>
    </>
  );
};

export default ErrorElement;
