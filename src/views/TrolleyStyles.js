import {
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    padding: '2em',
    borderRadius: '5px',
    paddingLeft: '4em',
  },

  info: {
    fontSize: '96px',
    textAlign: 'center',
    color: '#354D64',
    fontWeight: '600',
    marginTop: '2em',
    whiteSpace: 'pre',
  },
  position: {
    fontSize: '50px',
    textAlign: 'center',
    color: '#354D64',
    fontWeight: '600',
    top: '1em',
    position: 'relative',
    whiteSpace: 'pre',
  },

  buttons: {
    justifyContent: 'center',
  },

  trolleyGrid: {
    display: 'inline-grid',
  },

  rack: {
    margin: 'auto',
    minHeight: '70em',
  },

}));

export default useStyles;
