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
  displayMovieSummary = (event) => {
    console.log('yes')
    event.preventDefault()
    const selectedMovie = this.state.movies.find(movie => movie.id === event.target.id) 
      this.setState({movies: selectedMovie});
  }

render() {
  return (
    <main className='App'>
    <Navbar />
    <MovieLibrary movies={this.state.movies} displayMovieSummary={this.displayMovieSummary}/>

    </main>
  )
}
}

export default App;
