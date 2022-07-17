import React, { Component } from 'react';
import MoviePage from './MoviePage.js'
import './MovieSummary.css';



class MovieSummary extends Component {
    constructor() {
    super()
      this.state = {
        movie: {},
        loading: false,
        error: false,
        video: []
      }
    }

    componentDidMount = () => {
      this.setState(prevState => {
          return { 
        ...prevState, loading: true
      }})
      Promise.all([fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`),
       fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}/videos`)])
        .then(([res1, res2]) => {
          return Promise.all([res1.json(), res2.json()])
        })
        .then(([res1, res2]) => {
          this.setState(prevState => {
              return {
            ...prevState, movie: res1.movie, loading: false, video: res2.videos
          }})
      })
        .catch(error => {
          this.setState(prevState => {
            return {
          ...prevState, error: true
          }})
        })
        
        }
    

      render() {
        if (this.state.loading) {
          return <p className='loading'>LOADING!!!</p>
        }
        return (
          <main className='MovieSummary'>
              <MoviePage movie={this.state.movie} video={this.state.video}/>
          </main>
        )
      }
    }
    

export default MovieSummary;