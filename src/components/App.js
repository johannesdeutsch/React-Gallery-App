import React from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import apiKey from '../config.js';
import {
  BrowserRouter, 
  Route
} from 'react-router-dom';




const App  = () => {

  return (
    <BrowserRouter>
    <div className='container'>
      <Route path="/" component={SearchForm} />
      <Route path="/" component={Navigation} />
    </div>
    </BrowserRouter>
  );

}


const api = apiKey;

export default App;


