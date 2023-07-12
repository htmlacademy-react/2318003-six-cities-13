import {Navigate} from 'react-router-dom';

import {PageLinks, AuthorizationStatus} from '../constant/constant.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={PageLinks.login} />
  );
}

export {PrivateRoute};
