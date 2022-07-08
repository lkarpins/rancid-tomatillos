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
// componentDidMount = () => {
//   this.setState({
//     movies: movieData.movies.map(movie => movie)
//   })
//   console.log(this.state)
//   console.log(movieData.movies.map(movie => movie))
// } 

// populateMovies = () => {
//   this.setState({
//     movies: movieData.movies.map(movie => movie)
//   })
//   console.log(this.state)
// }

render() {
  console.log(this.state)
  return (
    <main className='App'>
    <Navbar />
    <MovieLibrary />
    </main>
  )
}
}

export default App;
