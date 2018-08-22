import React from 'react';
import {withRouter} from 'react-router';

import {Routes} from './features/shared/components';

const App = () => (
  <div className="wrapper">
    <Routes />
  </div>
);

// router
export default withRouter(App);
