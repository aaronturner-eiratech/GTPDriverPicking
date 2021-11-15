/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Store from './store/Store';
import App from './App';
import ErrorDialog from './components/errorDialog/ErrorDialog';
import './index.css';
import './fonts/OpenSans-Regular.ttf';

/**
 * Root app component, wrapped in router
 */

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Store>
          <ErrorDialog />
          <App />
        </Store>
      </Router>
    </ThemeProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root') || document.createElement('div'));
