import React, { Component } from 'react';
import movieData from './movieData';
import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';
import { render } from 'react-dom';
import MovieLibrary from './MovieLibrary';


class App extends Component {
  constructor() {
  super()
    this.state = {
      movies: []
    }
  }
  //stuff 


render() {
  return (
    <main className='App'>
    <Navbar />
    <MovieLibrary />
    </main>
  )
}
}

export default App;
