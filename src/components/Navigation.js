import React, { useRef } from 'react';
import { Outlet, NavLink } from 'react-router-dom';



const Navigation = ({changeSearch}) => {
  const buttonClick = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    changeSearch = buttonClick.current.value;
  }
  
  
  

  return (
    <nav className="main-nav" onClick = {(event) => handleClick(event)}>
      <ul>
        <li><NavLink to='cats' value='cats' ref={buttonClick}>Cats</NavLink></li>
        <li><NavLink to='dogs' value='dogs' ref={buttonClick}>Dogs</NavLink></li>
        <li><NavLink to='computers' value='computers' ref={buttonClick}>Computers</NavLink></li>
      </ul>
      <Outlet />
    </nav>     
  );

}



export default Navigation;