import React, { Component } from 'react';
import MovieLibrary from './MovieLibrary';
import MovieSummary from './MovieSummary';
import './index.css'
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
    return <p className='loading'>LOADING!!!</p>
  }
  return (
    <main className='App'>
    {this.state.error && <h1 className="error-message" data-cy="error">Uh oh! Something went wrong, please try again!</h1>}
      <header className="header">Rancid Tomatillos</header>
    <Route exact path='/' render={() => <><label className="label" for="search-from">Search Movies: <br></br>
    <input
    type='text'
    data-cy='search'
    placeholder="Search by Title"
    name='search-form'
    className='input'
    aria-label='search movies'
    onChange={event => this.searchMovies(event)}
    />
    </label>
    <MovieLibrary movies={this.selectMoviesToRender()} 
   />
   </>}/>
    <Route exact path='/movies/:id' render={({match})=> {
      return <MovieSummary id={match.params.id} filteredMovies={this.state.filteredMovies = []}/>}}/>
    </main>
  )
}
}

export default App;
