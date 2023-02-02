import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import axios from 'axios';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound.js';
import apiKey from '../config.js';



const App  = (props) => {
  
  //search and results states
  const [ pictures, setPhoto ] = useState([]);
  const [ searchInput, addSearchInput ] = useState("");
  
  //navigation states
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);

  //loading state
  const [loading, setLoading] = useState(false);

  //api key
  const api = apiKey;  
  
  
  //function for the api request with axios and setting the state for the data that is coming back, as well as the loading state
  function performSearch(searchInput) {
    let activeFetch = true;
    setLoading(true);
    
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags="${searchInput}"&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      if (activeFetch && searchInput === 'cats') {
        setCats(response.data.photos.photo);
        setLoading(false);
      } else if (activeFetch && searchInput === 'dogs') {
        setDogs(response.data.photos.photo);
        setLoading(false);
      } else if (activeFetch && searchInput === 'computers') {
        setComputers(response.data.photos.photo);
        setLoading(false);
      } else if (activeFetch) {
        setPhoto(response.data.photos.photo);
        setLoading(false);
      }
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
      setLoading(false);
    });

    return () => {activeFetch = false}
  }
  
  
//with useEffect calling the function above
  useEffect(() => {
    performSearch('cats');
    performSearch('dogs');
    performSearch('computers');
    performSearch(searchInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

//the value from the searchInput of the SearchForm gets into the state
  const handleAddSearchInput = value => {
    addSearchInput(value);
  };

//Routes and components with props
  return (
    <div className='container'>
      <SearchForm changeSearchInput={handleAddSearchInput} />
      <Navigation />
        <Routes>
          <Route path="/" element={<PhotoContainer dataPictures={pictures} searchInput={searchInput} handleAddSearchInput={handleAddSearchInput} loading={loading}/> } />
          <Route path="/search/:searchInput" element={<PhotoContainer dataPictures={pictures} searchInput={searchInput} handleAddSearchInput={handleAddSearchInput} loading={loading}/> } />
          <Route path="/cats" element={<PhotoContainer dataCats={cats} searchInput={searchInput} handleAddSearchInput={handleAddSearchInput} loading={loading}/>} />
          <Route path="/dogs" element={<PhotoContainer dataDogs={dogs} searchInput={searchInput} handleAddSearchInput={handleAddSearchInput} loading={loading}/> } />
          <Route path="/computers" element={<PhotoContainer dataComputers={computers} searchInput={searchInput} handleAddSearchInput={handleAddSearchInput} loading={loading}/>} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="404" replace/>} />
        </Routes>
    </div>
  );

  
};

export default App;
