import React, { useState, useEffect } from 'react';
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
  

  return (
    <div className='container'>
      <SearchForm changeSearchInput={handleAddSearchInput} />
      <Navigation />
        <Routes>
          <Route path="cats" element={<Cats searchInput={searchInput} changeSearch={handleAddSearchInput} data={pictures}/>} />
          <Route path="dogs" element={<Dogs searchInput={searchInput} changeSearch={handleAddSearchInput} data={pictures}/>} />
          <Route path="computers" element={<Computers searchInput={searchInput} changeSearch={handleAddSearchInput} data={pictures}/>} />
        </Routes>
      <PhotoContainer data={pictures} searchInput={searchInput}/>
    </div>
  );

  
};

export default App;
