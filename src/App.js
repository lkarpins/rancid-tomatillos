import React, { Component } from 'react';
import movieData from './movieData';
import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';
import { render } from 'react-dom';


class App extends Component {
  constructor() {
  super()
    this.state = {
      movies: []
    }
  }
  //stuff 


render() {
  return (
    <main className='App'>
    <Navbar />
    </main>
  )
}
}

export default App;
