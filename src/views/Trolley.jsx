import React, { useEffect, useContext, useState } from 'react';
import {
  Grid, Typography, Paper, Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from '../store/Store';
import SkyRestService from '../services/SkyRestService';
import PageContainer from '../components/pageContainer/PageContainer';
import PageProgress from '../components/pageProgress/PageProgress';
import RackLayout from '../components/rackLayout/RackLayout';
import useStyles from './TrolleyStyles';

/**
 * Trolley page
 *
 * @component
 * @example
 * return (
 *   <Trolley />
 * )
 */
export default function Trolley(props) {
  const { testEnv } = props;
  const [state, dispatch] = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [rackLayout, setRackLayout] = useState([]);
  const classes = useStyles();
  const history = useHistory();
  const RestService = new SkyRestService();

  useEffect(() => {

  }, []);

  /**
   * Release Trolley
   */
  async function releaseTrolley() {
    try {
      const release = await RestService.releaseBuffer(!testEnv ? state.vanId.vanSelected : 'test-1');
      console.log(release);
      dispatch({ type: 'UNSET_VAN_ID' });
      history.push({
        pathname: '/',
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'SET_DEFAULT_ERROR',
      });
    }
  }

  /**
   * Get rack layout
   */
  async function getRackLayout() {
    setLoading(true);
    try {
      const rack = await RestService.getCells(!testEnv ? state.vanId.vanSelected : 'test-1');
      setRackLayout(rack);
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'SET_DEFAULT_ERROR',
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    if (state.vanId || testEnv) {
      getRackLayout();
    } else {
      history.push({
        pathname: '/',
      });
    }
  }, []);

  return (
    <>
      <PageContainer id="trolley">
        {loading ? <PageProgress />
          : (
            <>
              <Typography className={classes.info}>
                Set Trolley Positions
              </Typography>
              <Typography className={classes.position}>
                {rackLayout.layout.positon}
              </Typography>
              <Paper elevation={0} className={classes.container}>
                <Grid container justify="center" alignItems="center" className={classes.trolleyGrid}>
                  <Grid xs={12} className={classes.rack}>
                    <RackLayout rackLayout={rackLayout} />
                  </Grid>
                  <Grid xs={12} className={classes.buttons}>
                    <Button
                      id="release-action"
                      data-testid="release-action"
                      className="mainBtn"
                      onClick={releaseTrolley}
                    >
                      Release
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </>
          )}
      </PageContainer>
    </>
  );
}

Trolley.defaultProps = {
  testEnv: false,
};

Trolley.propTypes = {
  // For unit test that would otherwise always have loading wheel
  testEnv: PropTypes.bool,
};
