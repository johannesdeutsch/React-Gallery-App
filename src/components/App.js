import React from 'react';
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

  //const handleInput = event => {
  //setSearchTerm(event.target.value)
  //};
  //still need to adjust it to react, see video
  function componentDidMount() {
    // Make a request for a user with a given ID
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${value}&page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo
      });
    })
    .catch(error => {
      // handle error
      console.log('Error fetching and parsing data', error);
    });
  }


  return (
    <div className='container'>
      <SearchForm setValue={props} />
      <Navigation />
        <Routes>
          <Route path="cats" element={<Cats />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="computers" element={<Computers />} />
        </Routes>
      <PhotoContainer photos={photos} />
    </div>
  );

};




export default App;
