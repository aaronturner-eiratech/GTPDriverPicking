import {
  createTheme,
} from '@material-ui/core/styles';

const colors = {
  bluewood: '#354D64',
  gray: '#E5E5E5',
  green: '#45FF7F',
  green2: '#36E86D',
  turquoise: '#48D1CC',
  lightTurquoise: '#daf6f5',
  greenLight: 'rgba(54, 232, 109, 0.2)',
  yellow: '#FFE145',
  yellowMed: '#FFC045',
  yellowLight: 'rgba(255, 225, 69, 0.2)',
  blue: '#56CCF2',
  blueLight: 'rgba(86, 204, 242, 0.2)',
  grayishblue: '#AEB8C1',
  grayishblue20: '#D7DBE0',
  grayishblue60: '#8694A2',
  grayishblue10: '#EBEDEF',
  red: '#FF5B45',
  redLight: '#FFDEDA',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.bluewood,
    },
    secondary: {
      main: colors.grayishblue,
      light: colors.grayishblue20,
      dark: colors.grayishblue60,
      lightest: colors.grayishblue10,
    },
    background: {
      main: colors.gray,
    },
    green: {
      main: colors.green,
    },
    green2: {
      main: colors.green2,
      light: colors.greenLight,
    },
    yellow: {
      main: colors.yellow,
      light: colors.yellowLight,
      med: colors.yellowMed,
    },
    blue: {
      main: colors.blue,
      light: colors.blueLight,
    },
    red: {
      main: colors.red,
      light: colors.redLight,
    },
  },

  typography: {
    fontFamily: 'OpenSans',
    fontSize: 20,
    h1: {
      fontSize: '2.5rem',
      fontFamily: 'OpenSansSemiBold',
    },
    h2: {
      fontSize: '3.4em',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        '&.button': {
          textTransform: 'none!important',
          fontWeight: 500,
          height: 'min-content',
        },
        '&.successBtn': {
          borderColor: colors.lightTurquoise,
          background: colors.lightTurquoise,
          borderRadius: '.3em',
          borderWidth: '.1em',
          padding: '.4em',
          color: colors.turquoise,
          width: '7em',
        },
        '&.redBtn': {
          borderColor: colors.redLight,
          background: colors.redLight,
          borderRadius: '0.3em',
          borderWidth: '.1em',
          padding: '.4em',
          color: colors.red,
          marginRight: '1em',
          width: '7em',
        },
        '&$disabled': {
          '&.confirmBtn, &.cancelBtn': {
            '& .MuiButton-label': {
              border: `0.0em solid ${colors.grayishblue60} !important`,
              color: `${colors.grayishblue60} !important`,
              backgroundColor: colors.grayishblue10,
            },
          },
        },
        '&.mainBtn': {
          '& .MuiButton-label': {
            border: '0.0em solid #FAFAFA !important',
            color: '#3C546A!important',
            backgroundColor: '#FAFAFA',
            padding: '.7em',
            minWidth: '7em',
            borderRadius: '8px',
            fontSize: '60px',
          },
          '&.Mui-disabled': {
            '& .MuiButton-label': {
              background: '#ececec !important',
              color: 'rgba(53, 77, 100, 0.6) !important',
            },
          },
        },
        '&.tryAgainBtn': {
          '& .MuiButton-label': {
            border: '0.0em solid #3C546A !important',
            color: '#FFFFFF !important',
            backgroundColor: '#3C546A !important',
            padding: '.7em',
            minWidth: '7em',
            borderRadius: '8px',
            fontSize: '45px',
          },
        },
      },
    },
    MuiPaper: {
      root: {
        background: '#E5E5E5 !important',
      },
    },
  },
});

export default theme;
