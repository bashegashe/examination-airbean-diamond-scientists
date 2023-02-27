import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';

import router from './router'
import rootReducer from './reducers';

const preloadedState = undefined; // {} - Lägg in t.ex. API svar som vi vill ladda in i redux store i början

const store = legacy_createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
