import React, { Component } from 'react'
import styles from './MovieInfoPage.module.css';
import api from './../../api.tmdb'
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import { Container } from 'react-bootstrap';

import Movie from '../Movie/Movie'

class MovieInfoPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      movie_id: this.props.match.params.id,
      movie_data: {},
    }
  }

  componentDidMount(){
    fetch( 
        api.get_movie( this.state.movie_id ) 
      ).then( 
        response => response.json() 
      ).then(
        ( result )=>{
        this.setState({
          movie_data: result
        })
        } 
      )

  }  
  render() {
    return (
      <div className={styles.MovieInfoPage}>
        {
          this.state.movie_data.status_code === 34 ? 
          (
            <div className="mt-5 text-center" >
              <em>
                <h3 className="text-danger" >The movie you requested not found.</h3>
              </em>
              <Container className="mt-5" >
                <strong>Try Again</strong>
                <br />&nbsp;<br />
                <MovieSearchForm />
              </Container>
            </div>
          ):
            Object.keys( this.state.movie_data ).length === 0 ?
            (
              <div className="mt-5 text-center" >
                <h3>Please wait. Getting Movie</h3>
              </div>
            ):
            <Movie
              data={ this.state.movie_data }
            />
        }
      </div>
    )
  }
}

export default MovieInfoPage;
