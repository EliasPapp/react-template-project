import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import HelpPage from '../../pages/help/help_page';
import HomePage from '../../pages/home/home_page';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/help" exact component={HelpPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;