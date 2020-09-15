import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import AppNav from './Components/AppNav';
import Cart from './Components/Cart';

const routes = (
  <>
    <AppNav />
    <Route name='dashboard' exact={true} path='/' component={Dashboard} />
    <Route name='cart' exact={true} path='/cart' component={Cart} />
  </>
);
export default routes;
