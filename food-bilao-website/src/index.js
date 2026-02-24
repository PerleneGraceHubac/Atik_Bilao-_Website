import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // <--- 1. Import this
import App from './App';

ReactDOM.render(
  // 2. Wrap your App in BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);