/**  * @jest-environment jsdom-sixteen  */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import VanSelector from '../../../views/VanSelector';
import userEvent from '@testing-library/user-event';
import vans from '../../../fixtures/getVans.json';
import fetchMock from "jest-fetch-mock";
import ComponentWrapper from '../ComponentWrapper';
fetchMock.enableFetchMocks();



describe('Van Selector page', () => {
    beforeEach(() => {
        jest.setTimeout(10000);
        fetchMock.mockResponse(JSON.stringify(vans));
        render(<ComponentWrapper><VanSelector /></ComponentWrapper>);
    });

    afterEach(() => {
        fetchMock.resetMocks();
    });

    it('should handle full user flow of Van Selector Page', async () => {
        //should render Trolley page
        await waitFor(() => {
            // expect(fetchMock.mock.calls[0][0]).toEqual("http://0.0.0.0:4010/vans");
            expect(screen.getByText('Select Van')).toBeInTheDocument();
            expect(screen.getByText('Enter')).toBeInTheDocument();

        });
    });
});
