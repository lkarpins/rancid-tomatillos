import React, { Component } from 'react';
import Navbar from './Navbar';
import MovieLibrary from './MovieLibrary';
import movieData from './movieData';
import MovieSummary from './MovieSummary';
import './App.css';


class App extends Component {
  constructor() {
  super()
    this.state = {
      movies: movieData.movies
    }
  }
  
  //stuff
  displayMovieSummary = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id === id) 
      this.setState({movies: selectedMovie});
  }

render() {
  return (
    <main className='App'>
    <Navbar />
    {this.state.movies.selectedMovie ? (<MovieSummary movies={this.state.movies}/>) : (<MovieLibrary movies={this.state.movies} displayMovieSummary={this.displayMovieSummary}/>)}
    </main>
  )
}
}

export default App;
