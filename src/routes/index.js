import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import TesteToken from '../pages/TesteToken';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/teste" exact component={TesteToken} isPrivate />
      <Route path="/*" exact component={() => <div>404</div>} />
    </Switch>
  );
}
