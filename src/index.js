import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {TolgeeProvider} from "@tolgee/react";
import './ash.css'


ReactDOM.render(
  
  <React.StrictMode>
  <BrowserRouter>
  
    <TolgeeProvider
        staticData={{
          en: () => import('./i18n/en.json'),
          ru: () => import('./i18n/ru.json'),
        }}
        loadingFallback={<>Loading...</>}
    >
      <App />
    </TolgeeProvider>
  </BrowserRouter>
    
    
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
