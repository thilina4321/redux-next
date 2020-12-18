import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import combineReducer from './Store/reducers/combineReducer'



ReactDOM.render(<Provider store={createStore(combineReducer)}> <App /> </Provider> , document.querySelector('#root'))