import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rackContainer: {
    marginTop: '1.5em',
    height: '41em',
    width: '23em',
    borderRadius: '1.3em',

    '& > div:first-child': {
      paddingTop: '1em!important',
    },

    '& > div:last-child': {
      paddingBottom: '1em!important',
    },
  },

  rackShelf: {
    display: 'flex',
    flexDirection: 'row',

    '& > div:first-child': {
      marginLeft: '1em!important',
    },

    '& > div:last-child': {
      marginRight: '1em!important',
    },
  },

  rackCell: {
    margin: '.38em',
    borderRadius: '1em',

    '& > button': {
      position: 'relative',
      padding: '0',
      width: '100%',
      height: '100%',
      border: 'none',
      outline: 'none',
      backgroundColor: '#FFFFFF',
      borderRadius: '1em',
      cursor: 'pointer',

      '&.selected': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },

}));

export default useStyles;
