import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import apiKey from '../config.js';



const App  = (props) => {
  const [ pictures, setPhoto ] = useState([]);
  const [ searchInput, addSearchInput ] = useState("");
  const api = apiKey;

  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);
  
  function performSearch(searchInput) {
    let activeFetch = true;
    // Make a request for a user with a given ID
    
    
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags="${searchInput}"&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response);
      if (activeFetch && searchInput === 'cats') {
        setCats(response.data.photos.photo);
      } else if (activeFetch && searchInput === 'dogs') {
        setDogs(response.data.photos.photo);
      } else if (activeFetch && searchInput === 'computers') {
        setComputers(response.data.photos.photo);
      } else if (activeFetch) {
        setPhoto(response.data.photos.photo);
      }
      })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });

    return () => {activeFetch = false}
  }
  
  useEffect(() => {
    performSearch('cats');
    performSearch('dogs');
    performSearch('computers');
    performSearch(searchInput);
  }, [searchInput]);

  const handleAddSearchInput = value => {
    addSearchInput(value);
  };
  
  

  return (
    <div className='container'>
      <SearchForm changeSearchInput={handleAddSearchInput} />
      <Navigation />
        <Routes>
          <Route path="/:searchInput" element={<PhotoContainer data={[pictures, cats, dogs, computers]} searchInput={searchInput}/> } />
        </Routes>
    </div>
  );

  
};

export default App;
