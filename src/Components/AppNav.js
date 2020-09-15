import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { withStyles, makeStyles } from '@material-ui/styles';
import { AppBar, IconButton, Badge, Link } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    'color': 'white',
    'max-width': '20px',
    'position': 'absolute',
    'right': '1pc',
    'top': '0.9pc',
    '&:hover': {
      backgroundColor: 'none',
      color: 'gray',
    },
  },
  title: {
    textAlign: 'center',
  },
  link: {
    position: 'absolute',
    color: 'white',
    top: '34%',
    left: '2pc',
    cursor: 'pointer',
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    border: `1px solid white`,
    padding: '0 2px',
  },
}))(Badge);

const AppNav = () => {
  const classes = useStyles();
  const history = useHistory();

  const { selectedProducts } = useContext(AppContext);
  const allSelectedProducts = [];
  for (const key in selectedProducts) {
    if (!allSelectedProducts.includes(selectedProducts[key])) {
      allSelectedProducts.push(selectedProducts[key]);
    }
  }
  const navigateTopage = (url) => () => history.push(url);

  return (
    <>
      <AppBar position='sticky'>
        <Link className={classes.link} onClick={navigateTopage('/')}>
          Home
        </Link>
        <h2 className={classes.title}>Welcome To E-Commerce Application </h2>
        <IconButton
          disabled={!selectedProducts.length}
          aria-label='cart'
          className={classes.root}
          onClick={navigateTopage('/cart')}
        >
          <StyledBadge badgeContent={allSelectedProducts.length} color='default'>
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </AppBar>
    </>
  );
};

export default AppNav;
