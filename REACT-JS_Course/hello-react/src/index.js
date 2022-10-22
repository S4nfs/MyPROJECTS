import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux'    //flows the data to whole application
import rootReducer from './services/reducers'
// import { configureStore } from '@reduxjs/toolkit'

//get rootreducer data
const store = createStore(rootReducer);
// window.store = store;

// console.warn(`store data : ${store}`)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
