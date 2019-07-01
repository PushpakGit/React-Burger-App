import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import middlewareThunk from 'redux-thunk';
import reducer from './Reducers/Reducers';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import AppP from './Container/App';
import registerServiceWorker from './registerServiceWorker';



const store = createStore(
    reducer,
    applyMiddleware(
        middlewareThunk
    )
  );

  ReactDOM.render(<Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            </Provider>,
            document.getElementById('product')
  );
registerServiceWorker();
