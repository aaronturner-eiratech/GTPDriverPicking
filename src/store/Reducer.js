/**
 * Functionality to set global state
 *
 * @component
 * @param {object} state current global state
 * @param {object} action contains action type and payload
 *
 * @example to be used with Context
 * import React, { useContext } from 'react';
 * import { Context } from './store/Store';
 *
 * function childComponent () {
 *   const [state, dispatch] = useContext(Context);
 *
 *   dispatch({ type: 'CLEAR_ERROR', payload: {} });
 * }
 */
const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'SET_DEFAULT_ERROR':
      return {
        ...state,
        error: {
          title: 'Failed to connect to the server',
          message: 'Please try again. If the error persist, please contact support to resolve the issue.',
        },
      };
    case 'SET_VAN_ID':
      return {
        ...state,
        vanId: action.payload.vanId,
      };
    case 'UNSET_VAN_ID':
      return {
        ...state,
        vanId: null,
      };
    default:
      return state;
  }
};
export default Reducer;
