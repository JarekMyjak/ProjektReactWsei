import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MainPage } from './components/MainPage/MainPage';
import { Reset } from "styled-reset";
import { Provider } from 'react-redux'
import store from './tools/store'


ReactDOM.render(
  <>
    <Provider store={store}>
      <Reset />
      <MainPage></MainPage>
    </Provider>
  </>,
  document.getElementById('root')
);

