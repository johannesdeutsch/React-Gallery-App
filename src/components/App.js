import React, { useState } from 'react';
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

  const api = apiKey;

  



  const [ searchInput, setPhoto] = useState([
  
    function componentDidMount() {
    // Make a request for a user with a given ID
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${searchInput}&page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setPhoto(response.data);
      })
      .catch(error => {
        // handle error
        console.log('Error fetching and parsing data', error);
      });
    }
 ]);
  
 



  return (
    <div className='container'>
      <SearchForm onSearch={componentDidMount} />
      <Navigation />
        <Routes>
          <Route path="cats" element={<Cats />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="computers" element={<Computers />} />
        </Routes>
      <PhotoContainer />
    </div>
  );

};




export default App;
