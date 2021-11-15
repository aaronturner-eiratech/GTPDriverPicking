import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  progress: {
    margin: '25% 30%',
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& > p': {
      marginTop: '1em',
    },
  },
}));

/**
 * MUI Circular Progress positioned in the center of the page
 *
 * @component
 * @example
 *
 * return (
 *   <PageProgress />
 * )
 */
export default function PageProgress() {
  const classes = useStyles();

  return (
    <div className={classes.progress}>
      <CircularProgress />
      <Typography color="primary" align="center">Retrieving data...</Typography>
    </div>
  );
}
