import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './css/main.css';
import './css/animation.css';

import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
