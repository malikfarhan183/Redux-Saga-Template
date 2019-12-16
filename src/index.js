import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
// import App from './components/App';
import rootSaga from './sagas';
import { Route, Link, BrowserRouter as Router , Switch  } from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './views/Login/Login.js';
import NotFound from './views/NotFound/NotFound.js';

import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
render(
   <Provider store={store}>
       <Router>
         <Switch>
           <Route exact  path="/" component={Login} />
           <Route exact  path="/login" component={Login} />
           <Route path="/home" component={App} />
           <Route component={NotFound} />

        </Switch>
       </Router>
   </Provider>,
document.getElementById('root'),
);
if (module.hot) { module.hot.accept(App);}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
