import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MainPage } from './components/MainPage/MainPage';
import { Reset } from "styled-reset";
import { Provider } from 'react-redux'
import store from './tools/store'
import App from './App'


ReactDOM.render(
  <>
    <Provider store={store}>
      <Reset />
      <App/>
    </Provider>
  </>,
  document.getElementById('root')
);

