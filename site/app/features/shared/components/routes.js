import React from 'react';
import {Switch, Route} from 'react-router';

import {Main} from '../../main/components';
import NotFound from './notFound';

import {ROUTES} from '../constants';

export default () => (
  <Switch>
    <Route exact path={ROUTES.home.route} component={Main} />
    <Route component={NotFound} />
  </Switch>
);
