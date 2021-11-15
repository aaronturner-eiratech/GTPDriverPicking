import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    marginLeft: '7em',
    width: 'calc(100% - 7em)',
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    '@media screen and (min-width: 1400px)': {
      marginLeft: 'auto',
      width: '100%',
    },
  },
}));

export default useStyles;
