/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './RackLayoutStyles';
/**
 * Component that displays the layout of the rack
 *
 * @component
 *
 * @prop {object}   rackLayout    data provided to get rack layout and tasks *
 * @example
 *
 * return (
 *     <RackLayout
 *      rackLayout={rackLayout}
 *    />
 * )
 */
export default function RackLayout(props) {
  const classes = useStyles();
  const {
    rackLayout,
  } = props;
  const { layout } = rackLayout;

  /**
   * adjust shelf height to displayed rack layout's height
   * @param {number} shelfHeight height of the shelf
   */
  function shelfHeightCalculator(shelfHeight) {
    const heightPercentage = layout.height / shelfHeight;
    const shelfHeightInEm = 39 / heightPercentage;
    return shelfHeightInEm;
  }

  /**
   * adjust cell width to displayed rack layout's width
   * @param {number} cellWidth width of a single cell
   */
  function cellWidthCalculator(cellWidth) {
    const widthPercentage = layout.width / cellWidth;
    const cellWidthInEm = (22 / widthPercentage) - 0.5;
    return cellWidthInEm;
  }

  return (
    <div
      className={classes.rackContainer}
      id={`rackLayout-${layout.id}`}
      data-testid="rack-layout"
    >
      {layout && layout.rows.length > 0
        ? layout.rows.slice().map((row, idx) => (
          <div key={`shelf-${idx}`} className={classes.rackShelf} style={{ height: `${shelfHeightCalculator(row.height)}em` }}>
            {row.cells && row.cells.length > 0 ? row.cells.map((cell, index) => (
              <div key={`cell-${index}`} className={classes.rackCell} style={{ width: `${cellWidthCalculator(cell.width)}em` }}>
                <button
                  type="button"
                  aria-label="cell-button"
                  id={`cell-button-${cell.cell_id}`}
                  data-testid={`cell-button-${cell.cell_id}`}
                  className={cell.active ? 'selected' : ''}
                />
              </div>
            )) : null}
          </div>
        )) : null}
    </div>
  );
}

RackLayout.defaultProps = {
  rackLayout: null,
};
RackLayout.propTypes = {
  rackLayout: PropTypes.objectOf(PropTypes.any),
};
