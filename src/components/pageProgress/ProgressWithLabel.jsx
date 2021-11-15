import React from 'react';
import PropTypes from 'prop-types';
import {
  CircularProgress,
  Typography,
  Box,
} from '@material-ui/core';

/**
 * MUI Circular Progress with value label positioned in the center of the page
 * NOTE: it has white color to be used on THREE-js canvas
 *
 * @component
 * @example
 *
 * return (
 *   <CircularProgressWithLabel value={90} />
 * )
 */
function CircularProgressWithLabel(props) {
  const { value } = props;
  return (
    <Box style={{ zIndex: 1000 }} position="absolute" top="40%" left="55%" display="inline-flex">
      <CircularProgress style={{ color: 'white' }} variant="determinate" size={80} value={value} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body1" component="div" style={{ color: 'white' }}>
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel;

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
  */
  value: PropTypes.number.isRequired,
};
