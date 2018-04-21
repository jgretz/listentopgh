import React from 'react';
import {Switch, Route} from 'react-router';

import {PghMap} from '../../map/components';
import NotFound from './notFound';

export default () => (
  <Switch>
    <Route exact path="/" component={PghMap} />

    <Route component={NotFound} />
  </Switch>
);
