import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProvideAuth } from './context/ProvideAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <NotificationsProvider>
      <ProvideAuth>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </ProvideAuth>
    </NotificationsProvider>
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
