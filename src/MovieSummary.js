import React, { Component } from 'react';
import MoviePage from './MoviePage.js'
import './MovieSummary.css';



class MovieSummary extends Component {
    constructor() {
    super()
      this.state = {
        movie: {},
        loading: false,
        error: false
      }
    }


    componentDidMount = () => {
        console.log(this.props.id)
        this.setState(prevState => {
            return { 
          ...prevState, loading: true
        }})
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
          .then(res => res.json())
          .then(movie => {
      
            this.setState(prevState => {
                return {
              ...prevState, movie: movie.movie, loading: false
            }})
            console.log(this.state.movie)
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
          return <p>LOADING!!!</p>
        }
        return (
          <main className='MovieSummary'>
              <MoviePage movie={this.state.movie} />
          </main>
        )
      }
    }
    

export default MovieSummary;