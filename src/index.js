import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { ToastProvider } from 'react-toast-notifications';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastProvider placement ={'bottom-center'}>
        <App />
    </ToastProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

