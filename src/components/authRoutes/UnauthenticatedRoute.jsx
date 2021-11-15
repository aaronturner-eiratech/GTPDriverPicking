import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { Context } from '../../store/Store';

function querystring(name, url = window.location.href) {
  const newName = name.replace(/[[]]/g, '\\$&');

  const regex = new RegExp(`[?&]${newName}(=([^&#]*)|&|#|$)`, 'i');
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * Route component that redirects from login to other page
 * if user is authenticated
 *
 */
export default function UnauthenticatedRoute({ children, ...rest }) {
  const { search } = useLocation();
  const [state] = useContext(Context);
  const { isAuthenticated, passwordUpdateRequired } = state;
  const redirect = querystring('redirect');
  if (!isAuthenticated) {
    return (
      <Route {...rest}>
        {children}
      </Route>
    );
  }
  if (isAuthenticated && passwordUpdateRequired) {
    return (
      <Route {...rest}>
        <Redirect to={{
          pathname: '/password',
          search,
        }}
        />
      </Route>
    );
  }
  return (
    <Route {...rest}>
      <Redirect to={redirect === '' || redirect === null ? '/' : redirect} />
    </Route>
  );
}

UnauthenticatedRoute.defaultProps = {
  children: null,
};

UnauthenticatedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
