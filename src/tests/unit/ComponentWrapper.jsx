import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Store from '../../store/Store';
import ErrorDialog from '../../components/errorDialog/ErrorDialog';
import ThemeProvider from './MockThemeProvider';

/**
 * Wrapper used in unit tests to provide context and router to the component
 *
 * @component
 * @prop {object} children component being wrapped
 * @example
 *
 * return (
 *   <ComponentWrapper>
 *     <Dashboard />
 *   </ComponentWrapper>
 * )
 */
export default function ComponentWrapper(props) {
    const { children } = props;

    return (
        <ThemeProvider>
            <BrowserRouter>
                <Store>
                    <ErrorDialog />
                    {children}
                </Store>
            </BrowserRouter>
        </ThemeProvider>
    );
}