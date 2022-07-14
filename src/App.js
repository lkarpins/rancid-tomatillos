import React, { Component } from 'react';
import Navbar from './Navbar';
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
          error: true,
        })
      })
      .finally(() => {
        this.setState({
          loading: false
        })
      })
}

render() {
  if (this.state.loading) {
    return <p>LOADING!!!</p>
  }
  return (
    <main className='App'>
    <Navbar data-cy="navbar"/>
    {this.state.error && <h1>SERIOUS PROBLEM!!! Please refresh.</h1>}

    <Route exact path='/' render={() => <MovieLibrary movies={this.state.movies} 
    fetchSpecificMovie={this.fetchSpecificMovie}/>} />
    <Route path='/movies/:id' render={({match})=> {
      return <MovieSummary id={match.params.id}/>}}/>
    </main>
  )
}
}

export default App;
