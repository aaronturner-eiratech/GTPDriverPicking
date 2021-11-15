/**  * @jest-environment jsdom-sixteen  */
import React from 'react';
import { render, screen } from '@testing-library/react';
import RackLayout from '../../../components/rackLayout/RackLayout';
import cells from '../../../fixtures/getCells.json';

describe("Rack Layout", () => {
    beforeEach(() => {
      render(
        <RackLayout
        rackLayout={cells}
          />
      );
    });
  
    it("RackLayout has been rendered", () => {
        expect(screen.getByTestId("cell-button-1")).toBeInTheDocument();
    });
  });
