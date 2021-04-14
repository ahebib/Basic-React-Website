import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import App from './App';
import SideMenu from './Components/SideMenu';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
  	<Header title={'Template Essentials'} />
    <App />
    <SideMenu />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();