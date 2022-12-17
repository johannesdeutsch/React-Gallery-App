import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import apiKey from '../config.js';

import Cats from './Cats';
import Dogs from './Dogs';
import Computers from './Computers';





const App  = (props) => {
  const [ pictures, setPhoto ] = useState([]);
  const [ searchInput, addSearchInput ] = useState("");
  const api = apiKey;

  
  useEffect(() => {
    let activeFetch = true;
    // Make a request for a user with a given ID
    
    
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${searchInput}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
       console.log(response);
      if (activeFetch) {
      setPhoto(response.data.photos.photo);
      }
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
    
    return () => {activeFetch = false}
  }, [searchInput]);

  const handleAddSearchInput = value => {
    addSearchInput(value);
  };

  const handleCatSearch = cats => {
    addSearchInput(cats);
  }

  const handleDogSearch = dogs => {
    addSearchInput(dogs);
  }

  const handleComputerSearch = computers => {
    addSearchInput(computers);
  }

  

  return (
    <div className='container'>
      <SearchForm changeSearchInput={handleAddSearchInput} />
      <Navigation />
        <Routes>
          <Route path="cats" element={<Cats searchInput={searchInput} changeSearchInput={handleCatSearch}/>} />
          <Route path="dogs" element={<Dogs searchInput={searchInput} changeSearchInput={handleDogSearch}/>} />
          <Route path="computers" element={<Computers searchInput={searchInput} changeSearchInput={handleComputerSearch}/>} />
        </Routes>
      <PhotoContainer data={pictures} searchInput={searchInput}/>
    </div>
  );
};

App.propTypes = {
  searchInput: PropTypes.string,
  changeSearchInput: PropTypes.string
};


export default App;
