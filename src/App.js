import React, { Component } from 'react';
import Form from './Form';
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
        this.setState({movies: movies.movies, loading: false})
      })
      .catch(error => {
        this.setState({
          error: true,
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
      <header className="header" >Rancid Tomatillos!</header>
    <Form data-cy="form"/>
    {this.state.error && <h1 data-cy="error">Uh oh! Something went wrong, please try again!</h1>}

    <Route exact path='/' render={() => <MovieLibrary movies={this.state.movies} 
    fetchSpecificMovie={this.fetchSpecificMovie}/>} />
    <Route path='/movies/:id' render={({match})=> {
      return <MovieSummary id={match.params.id}/>}}/>
    </main>
  )
}
}

export default App;
