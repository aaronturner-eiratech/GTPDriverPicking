import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

  icon: {
    padding: '.5em',
    paddingBottom: '2.3em',
    width: '3.5em',
    height: '3.5em',
  },
  list: {
    margin: 'auto',
  },
  iconStyle: {
    fontSize: '3em',
  },
  iconColor: {
    color: '#C9CFD6',
  },
  profileContainer: {
    justifySelf: 'start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: '0',
    whiteSpace: 'nowrap',
    marginTop: '3em',
    background: 'none',
    color: 'alignItems',
    border: 'none',
    padding: '20px',
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
  },
  initials: {
    backgroundColor: '#C9CFD6',
    height: '2em',
    width: '2em',
    display: 'flex',
    borderRadius: '50%',
    color: 'white',
    fontSize: '2em',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '.6em',
  },
  navBar: {
    width: '6em',
    '& > .MuiDrawer-paper': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#FFFFFF !important',
    },
  },
}));

export default useStyles;
