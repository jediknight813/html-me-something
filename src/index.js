import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// react components
import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex flex-col w-full h-auto bg-slate-600 min-h-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  </React.StrictMode>
);

