import React, { Component } from 'react';
import Navbar from './Navbar';
import MovieLibrary from './MovieLibrary';
import movieData from './movieData';
import './App.css';


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
