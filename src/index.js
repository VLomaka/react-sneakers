import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import 'macro-css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


