import {Navigate} from 'react-router-dom';
import {PropsWithChildren} from 'react';

import {PageLinks, AuthorizationStatus} from '../constant/constant.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>): JSX.Element {

  return (
    props.authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to={PageLinks.Login} />
  );
}

export {PrivateRoute};
