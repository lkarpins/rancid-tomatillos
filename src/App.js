import React, { Component } from 'react';
import Navbar from './Navbar';
import MovieLibrary from './MovieLibrary';
import MovieSummary from './MovieSummary';
import './App.css';


class App extends Component {
  constructor() {
  super()
    this.state = {
      movies: [],
      movieSummary: null,
      clicked: false,
      loading: false,
      movieSummaryLoading: false,
      errorMessage: null,
      error: false
    }
  }
  
 
componentDidMount = () => {
    this.setState({
      loading: true
    })
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => res.json())
      .then(movies => {
        this.setState({movies: movies.movies})
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message,
          error: true
        })
      })
      .finally(() => {
        this.setState({
          loading: false
        })
      })
}

fetchSpecificMovie = (id) => {
  this.setState({
    movieSummaryLoading: true
  })
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(res => res.json())
    .then(movie => {
      this.setState({
        movieSummary: movie.movie
      })
    })
    .catch(error => {
      this.setState({
        errorMessage: error.message,
        error: true
      })
    })
    .finally(() => {
      this.setState({
       movieSummaryLoading: false
      })
    })
}

  returnToMain = () => {
    this.setState({movieSummary: null}
      )
  }

render() {
  if (this.state.loading) {
    return <p>LOADING!!!</p>
  }
  return (
    <main className='App'>
    <Navbar />
    {this.state.error && <h1>SERIOUS PROBLEM!!! Please refresh.</h1>}
    {this.state.movieSummary ? (<MovieSummary movieSummary={this.state.movieSummary} returnToMain={this.returnToMain}/>) : (<MovieLibrary movies={this.state.movies} displayMovieSummary={this.displayMovieSummary} fetchSpecificMovie={this.fetchSpecificMovie}/>)}
    </main>
  )
}
}

export default App;
