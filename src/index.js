import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//redux related
import reducer from './store/reducers/combineReducer'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

