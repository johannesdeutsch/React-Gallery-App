import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { Outlet, NavLink } from 'react-router-dom';



const Navigation = (props) => {
  const cats = useRef();
  const dogs = useRef();
  const computers = useRef();

  const handleCatsButton = (event) => {
    event.preventDefault();
    props.changeCatsSearch(cats.current.value);
  }

  const handleDogsButton = (event) => {
    event.preventDefault();
    props.changeDogsSearch(dogs.current.value);
  }

  const handleComputersButton = (event) => {
    event.preventDefault();
    props.changeComputersSearch(computers.current.value);
  }
  
  

    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to='cats' ref={cats} onSubmit = {(event) => handleCatsButton(event)}>Cats</NavLink></li>
          <li><NavLink to='dogs' ref={dogs} onSubmit = {(event) => handleDogsButton(event)}>Dogs</NavLink></li>
          <li><NavLink to='computers' ref={computers} onSubmit = {(event) => handleComputersButton(event)}>Computers</NavLink></li>
        </ul>
        <Outlet />
      </nav>     
    );

}



export default Navigation;