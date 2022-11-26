import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import apiKey from '../config.js';

/* import Cats from './Cats';
import Dogs from './Dogs';
import Computers from './Computers'; */



const App  = (props) => {
  const [ data, setPhoto] = useState(null);
  const [ searchInput, addSearchInput ] = useState(null);
  const api = apiKey;

  
  useEffect(() => {

    // Make a request for a user with a given ID
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${searchInput}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response);
      setPhoto(response.data);
    })
    .catch(error => {
      // handle error
      console.log('Error fetching and parsing data', error);
    });
  }, []);

  const handleAddSearchInput = () => {
    addSearchInput(searchInput => searchInput + addSearchInput);
  }

  const handleFetchResult = () => {
    setPhoto(data => data + setPhoto);
  }

  return (
    <div className='container'>
      <SearchForm addSearchInput={handleAddSearchInput} />
      <Navigation />
         {/*<Routes>
          <Route path="cats" element={<Cats />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="computers" element={<Computers />} />
        </Routes> */}
      <PhotoContainer data={handleFetchResult} searchInput={searchInput}/>
    </div>
  );
};




export default App;
