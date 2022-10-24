import React from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import apiKey from '../config.js';





//still need to adjust it to react, see video
/* componentDidMount() {
    // Make a request for a user with a given ID
  axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
} */



const App  = () => {

  //const handleInput = event => {
  //  setSearchTerm(event.target.value)
  //};


  return (
    <div className='container'>
      <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="/" element={<Navigation />} />
      </Routes>
    </div>
  );

}


const api = apiKey;

export default App;


