import React, { useEffect, useContext, useState } from 'react';
import {
  Grid, Typography, Paper, Button, FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PageContainer from '../components/pageContainer/PageContainer';
import SkyRestService from '../services/SkyRestService';
import { Context } from '../store/Store';
import PageProgress from '../components/pageProgress/PageProgress';
import useStyles from './VanSelectorStyles';
// import testGetVansResponse from '../fixtures/getVans.json';

/**
 * Van Selector page
 *
 * @component
 * @example
 * return (
 *   <VanSelectorPage />
 * )
 */
export default function VanSelectorPage() {
  const [, dispatch] = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [vansList, setVansList] = useState([]);
  const [vanSelected, setVanSelected] = useState('');
  const history = useHistory();
  const classes = useStyles();
  const RestService = new SkyRestService();

  /**
     * get list of vans
     */
  async function requestVansList() {
    setLoading(true);
    try {
      const vans = await RestService.getVans();
      // const { vans } = testGetVansResponse;
      setVansList(vans.vans);
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'SET_DEFAULT_ERROR',
      });
    }
    setLoading(false);
  }

  /**
     * select van and move to trolley page
     */
  const selectVan = () => {
    dispatch({
      type: 'SET_VAN_ID',
      payload: {
        vanId: {
          vanSelected,
        },
      },
    });
    history.push({
      pathname: '/trolley',
    });
  };

  /**
   * Save new van by user
   * @param {number} input new quantity
   */
  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setVanSelected(event.target.value);
  };

  useEffect(() => {
    requestVansList();
  }, []);

  return (
    <>
      <PageContainer id="VanSelectorPage">
        {loading ? <PageProgress />
          : (
            <>
              <Typography className={classes.info}>
                Select Van
              </Typography>
              <Paper elevation={0} className={classes.container}>
                <Grid container justify="center" alignItems="center">
                  <Grid>
                    <FormControl
                      fullWidth
                      className={classes.formControl}
                      data-testid="van-select"
                    >

                      <Select
                        id="van-select"
                        label="Select Van"
                        disableUnderline
                        inputProps={{
                          classes: {
                            icon: classes.icon,
                            select: classes.select,
                          },
                        }}
                        MenuProps={{
                          anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                          },
                          transformOrigin: {
                            vertical: 'top',
                            horizontal: 'left',
                          },
                          getContentAnchorEl: null,
                        }}
                        value={vanSelected}
                        onChange={handleSelectChange}
                      >
                        {' '}
                        {vansList && vansList.length > 0 ? vansList.map((option) => (
                          <MenuItem
                            className={classes.menuItem}
                            name={option.name}
                            key={option.id}
                            value={option.name}
                            id={`select-option-${option.id}`}
                          >
                            <span style={{ marginLeft: '20px' }}>
                              {option.name}
                            </span>
                          </MenuItem>
                        )) : []}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid className={classes.buttons}>
                    <Button
                      disabled={!vanSelected}
                      id="enter"
                      data-testid="select-van-action"
                      className="mainBtn"
                      onClick={selectVan}
                    >
                      Enter
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
