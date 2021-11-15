/**  * @jest-environment jsdom-sixteen  */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Trolley from '../../../views/Trolley';
import userEvent from '@testing-library/user-event';
import cells from '../../../fixtures/getCells.json';
import fetchMock from "jest-fetch-mock";
import ComponentWrapper from '../ComponentWrapper';
fetchMock.enableFetchMocks();



describe('Trolley page', () => {
    beforeEach(() => {
        jest.setTimeout(10000);
        fetchMock.mockResponse(JSON.stringify(cells));
        render(<ComponentWrapper><Trolley testEnv/></ComponentWrapper>);
    });

    afterEach(() => {
        fetchMock.resetMocks();
    });

    it('should handle full user flow of the trolley Page', async () => {
        //should render Trolley page
        await waitFor(() => {
            // expect(fetchMock.mock.calls[0][0]).toEqual("http://0.0.0.0:4010/cells/Van-1");
            expect(screen.getByText('Set Trolley Positions')).toBeInTheDocument();
            expect(screen.getByText('Release')).toBeInTheDocument();

        });
    });
});
