import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';


//the React Router v6 links for the navigation
const Navigation = () => {

  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='cats'>Cats</NavLink></li>
        <li><NavLink to='dogs'>Dogs</NavLink></li>
        <li><NavLink to='computers'>Computers</NavLink></li>
      </ul>
      <Outlet />
    </nav>     
  );

}



export default Navigation;