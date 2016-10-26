///////////////////////////////////////////
// jquery and tether for bootstrap to use
// alternative is to link them in index.htm
/////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

/////////////////////////////////////////////////////////////////////////
// browserHistory would be preferred over hashHistory, but browserHistory
// would require configuring the server. So we will use hashHistory here.
// Please change to browserHistory if you have your own backend server.
// import {browserHistory as history} from 'react-router';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
const history = useRouterHistory(createHashHistory)();
//////////////////////////////////////////////////////////////////////////

import configureStore from './store/configureStore';

import App from './containers/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
