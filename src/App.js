import React, { Component } from 'react';
import MovieLibrary from './MovieLibrary';
import MovieSummary from './MovieSummary';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
  super()
    this.state = {
      movies: [],
      loading: false,
      error: false,
      filteredMovies: [],
    }
  }
  
 
componentDidMount = () => {
    this.setState({
      loading: true
    })
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(res => res.json())
      .then(movies => {
        this.setState({movies: movies.movies, loading: false})
      })
      .catch(error => {
        this.setState({
          error: true,
          loading: false
        })
      })
}

searchMovies = (event) => {
  const { value }  = event.target
  const searchedMovies = this.state.movies.filter(movie => {
    if (movie.title.toLowerCase().includes(value.toLowerCase())) {
      return movie
    }
  })
  this.setState({filteredMovies: searchedMovies})
  }

  selectMoviesToRender = () => {
    return !this.state.filteredMovies.length ? this.state.movies : this.state.filteredMovies
  }


render() {
  if (this.state.loading) {
    return <p>LOADING!!!</p>
  }
  return (
    <main className='App'>
    {this.state.error && <h1 data-cy="error">Uh oh! Something went wrong, please try again!</h1>}
      <header className="header" >Rancid Tomatillos!</header>

    <Route exact path='/' render={() => <> <input
    type='text'
    placeholder="Search by Title"
    name='search-form'
    onChange={event => this.searchMovies(event)}
    />
    
    <MovieLibrary movies={this.selectMoviesToRender()} 
    fetchSpecificMovie={this.fetchSpecificMovie} />
   </>}/>
    <Route exact path='/movies/:id' render={({match})=> {
      return <MovieSummary id={match.params.id}/>}}/>
    </main>
  )
}
}

export default App;
