import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Route component that redirects to login if user
 * is unauthenticated
 *
 * @component
 * @example
 *
 * return (
 *     <AuthenticatedRoute
 *        path="/racks"
 *        exact
 *        component={RacksPage}
 *        props={props}
 *      />
 * )
 */

export default function AuthenticatedRoute({ children, ...rest }) {
  // do not redirect in integration test as it causes error:
  // "Caught error after test environment was torn down"
  return (
    <Route {...rest}>
      {children}
    </Route>
  );
}

AuthenticatedRoute.defaultProps = {
  children: null,
};

AuthenticatedRoute.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};
