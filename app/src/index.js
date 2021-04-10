import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import './Index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();