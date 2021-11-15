
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

/**
 * Mocking Material UI Theme Provider for tests
 * see more info at https://material-ui.com/guides/testing/
 * @param {object} children 
 */
export default function Provider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}