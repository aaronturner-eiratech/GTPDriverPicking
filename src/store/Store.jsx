import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import Reducer from './Reducer';

const initialState = {
  error: null,
  isAuthenticated: null,
  user: null,
  token: null,
  vanId: null,
};

/**
 * Store to manage global state that needs to be accessed or
 * changed from different components at the same time
 *
 * @component
 * @prop {arrayOf<object>} children components that require
 * access to global state
 *
 * @example
 * import React, { useContext } from 'react';
 * import { Context } from './store/Store';
 *
 * function childComponent () {
 *   const [state, dispatch] = useContext(Context);
 * }
 */

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]).isRequired,
};

/**
 * initial context as array including initialState
 * and empty function to avoid error
 * "Invalid attempt to destructure non-iterable instance."
 */
export const Context = createContext([initialState, () => { }]);
export default Store;
