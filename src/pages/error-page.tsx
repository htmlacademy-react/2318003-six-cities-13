import { Link } from 'react-router-dom';

function ErrorPage (): JSX.Element {
  return(
    <>
      <h1>404. Page not found</h1>
      <Link to="/">На главную страницу</Link>
    </>
  );
}

export {ErrorPage};
