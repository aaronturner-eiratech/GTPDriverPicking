import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
// import env from '@beam-australia/react-env';
// import { Context } from '../../store/Store';
import useStyles from './NavigationStyles';
import menuItems from './menuItems';
// import InfoDialog from '../infoDialog/InfoDialog';

export default function TemporaryDrawer() {
  const classes = useStyles();
  const navCopy = [...menuItems];
  const [navigation, setNavigation] = useState(navCopy);
  // const [state, dispatch] = useContext(Context);
  // const { user, isAuthenticated } = state;
  // const [openLogoutModal, setLogoutModalOpen] = useState(false);
  // const location = useLocation();
  // const testMode = env('APP_MODE') && env('APP_MODE') === 'test';

  /**
  * set selected menu item
  */
  function menuItemClicked(label) {
    const navigationCopy = navigation.map((x) => {
      /* eslint-disable-next-line */
      x.label === label ? x.active = true : x.active = false;
      return x;
    });
    setNavigation(navigationCopy);
  }

  // function getInitials() {
  //   let initials = '';
  //   if (user) {
  //     const { username, firstname, lastname } = user;
  //     if (firstname && lastname) {
  //       initials = firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase();
  //     } else {
  //       initials = username.charAt(0).toUpperCase();
  //     }
  //   }
  //   return initials;
  // }

  // function handleLogout() {
  //   setLogoutModalOpen(false);
  //   dispatch({
  //     type: 'SET_UNAUTHENTICATED',
  //   });
  // }

  return (
    <>
      <div>
        <Drawer id="navigation" className={classes.navBar} variant="permanent">
          <button type="button" className={classes.profileContainer}>
            <div className={classes.initials}>AT</div>
          </button>
          <List className={classes.list}>
            {navigation.map((item) => (
              <ListItem key={item.label}>
                <Link
                  id={item.path}
                  key={item.label}
                  to={item.path}
                  onClick={() => menuItemClicked(item.label)}
                  className={classes.menuItems}
                >
                  <Tooltip
                    id={`tooltip-${item.label}`}
                    title={item.label}
                    enterNextDelay={1000}
                    enterDelay={1000}
                  >
                    <img
                      alt={`${item.label} icon`}
                      className={classes.icon}
                      src={
                            item.active || window.location.pathname === item.path
                              ? item.activeIcon
                              : item.icon
                          }
                    />
                  </Tooltip>
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </>
  );
}
