import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Sorry, page not found!</h1>
      <NavLink to='/'>Back to home page</NavLink>
    </div>
  )
};

export default NotFound;