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
      movies: movieData.movies,
      clicked: false
    }
  }
  
  //stuff
  displayMovieSummary = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id === id) 
      this.setState({movies: selectedMovie, clicked: true});
  }

  returnToMain = () => {
    this.setState({movies: movieData.movies, clicked: false}
      )
  }

render() {
  return (
    <main className='App'>
    <Navbar />
    {this.state.clicked ? (<MovieSummary movies={this.state.movies} returnToMain={this.returnToMain}/>) : (<MovieLibrary movies={this.state.movies} displayMovieSummary={this.displayMovieSummary}/>)}
    </main>
  )
}
}

export default App;
