// Error.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for might be unavailable or does not exist.</p>
      <p>Return to <NavLink activeClassName="active-link" to="/">home</NavLink>.</p>
    </div>
  );
};

export default Error;
