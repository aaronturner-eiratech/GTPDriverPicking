import {
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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

  formControl: {
    display: 'flex',
    marginTop: '1em',
    marginBottom: '4em',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: "''",
      width: '0.1',
      right: '5em',
      display: 'inline-block',
    },

    '& .MuiSelect-select': {
      width: '14em',
    },
  },

  select: {
    backgroundColor: theme.palette.secondary.light,
    lineHeight: '2.1em',
    fontSize: '45px',
    borderRadius: '.1em',
    padding: '40px',
    color: theme.palette.primary.main,
    '&:focus': {
      backgroundColor: `${theme.palette.secondary.light}!important`,
      borderRadius: '.1em!important',
    },
    '&.Mui-disabled': {
      background: '#ececec',
      color: 'rgba(53, 77, 100, 0.6)',
    },
  },

  icon: {
    top: '28%',
    right: '3.5%',
    width: '.9em',
    fontSize: '3em!important',
    color: '#8694A2!important',
  },

  menuItem: {
    fontSize: '37px',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginLeft: '-15px',
    color: theme.palette.primary.main,
    '&:focus': {
      backgroundColor: `${theme.palette.secondary.light}!important`,
    },
  },

  buttons: {
    position: 'absolute',
    bottom: '9em',
    justifyContent: 'center',
  },

}));

export default useStyles;
