import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MyComponent} from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<MyComponent />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
