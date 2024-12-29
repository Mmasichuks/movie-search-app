import React, { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/movieList'
import SearchBox from './components/SearchBox'



function App() {
  
  
  return (
    <>
      <SearchBox />
      <br/>
      <MovieList />
      
      </>
  )
}

export default App
