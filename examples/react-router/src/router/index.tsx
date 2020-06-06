import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './menu';
import Components from '../pages/router-dom';

const Router: React.SFC = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/react-router/:slug" exact component={Components} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
