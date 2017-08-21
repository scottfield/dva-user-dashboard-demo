import React from 'react';
import {Route, Router} from 'dva/router';
import Users from './routes/Users';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/users" component={Users}/>
    </Router>
  );
}

export default RouterConfig;
