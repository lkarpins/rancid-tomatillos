import React, { Component } from 'react';
import movieData from './movieData';
import Navbar from './Navbar';
import './App.css';
import MovieLibrary from './MovieLibrary';


class App extends Component {
  constructor() {
  super()
    this.state = {
      movies: movieData.movies.map(movie => movie)
    }
  }
  //stuff 

render() {
  return (
    <main className='App'>
    <Navbar />
    <MovieLibrary movies={this.state.movies}/>
    </main>
  )
}
}

export default App;
