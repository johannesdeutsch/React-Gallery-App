import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { Outlet, NavLink } from 'react-router-dom';



const Navigation = (props) => {
  const cats = useRef();
  const dogs = useRef();
  const computers = useRef();

  const handleCatsButton = (event) => {
    event.preventDefault();
    props.changeSearchInput(cats.current.name);
  }

  const handleDogsButton = (event) => {
    event.preventDefault();
    props.changeSearchInput(dogs.current.name);
  }

  const handleComputersButton = (event) => {
    event.preventDefault();
    props.changeSearchInput(computers.current.name);
  }

  

    return (
      <nav className="main-nav">
       {console.log(cats)}
        <ul>
          <li><NavLink to='cats' ref={cats} onSubmit = {(event) => handleCatsButton(event)}>Cats</NavLink></li>
          <li><NavLink to='dogs' ref={dogs} onSubmit = {(event) => handleDogsButton(event)}>Dogs</NavLink></li>
          <li><NavLink to='computers' ref={computers} onSubmit = {(event) => handleComputersButton(event)}>Computers</NavLink></li>
        </ul>
        <Outlet />
      </nav>     
    );

}

Navigation.propTypes = {
  changeSearchInput: PropTypes.string
};


export default Navigation;