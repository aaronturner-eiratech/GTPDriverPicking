import React, { useEffect } from 'react';
// import env from '@beam-australia/react-env';
import { Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import AuthenticatedRoute from './components/authRoutes/AuthenticatedRoute';
import VanSelector from './views/VanSelector';
import Trolley from './views/Trolley';

// import { Context } from './store/Store';
/**
 * App router paths
 * @param {object} props
 */
export default function App(props) {
  useEffect(() => {
  }, []);

  return (
    <>
      <Navigation />
      <Switch>
        <AuthenticatedRoute path="/" exact component={VanSelector} props={props} />
        <AuthenticatedRoute path="/trolley" exact component={Trolley} props={props} />
      </Switch>
    </>
  );
}
