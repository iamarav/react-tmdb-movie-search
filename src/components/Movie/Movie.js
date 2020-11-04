import React, { Component } from 'react'
import { Badge, Col, Container, Row, Table } from 'react-bootstrap';
import api from '../../api.tmdb';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import styles from './Movie.module.css';

class Movie extends Component {
  render() {
    const movie = this.props.data
    // console.log( movie )
    return (
      <div className={ styles.Movie + " mt-3" }>
        <Container >
          <div>
            <MovieSearchForm 
              getMovieHandler = { ( movie_id ) => this.props.getMovieHandler( movie_id ) }
            />
          </div>
          <Row className=" mt-4" >
            { 
              movie.poster_path !== undefined &&
              movie.poster_path !== null  ?
              (
              <Col md={ 4 }>
                <img
                  className="col-12"
                  src={ api.get_image_500( movie.poster_path ) }
                  alt={ movie.title +" Poster" }
                  title={ movie.title +" Poster" }
                />
              </Col>
              ):null
            } 
            <Col md={ 8 } >
              <h1>{ movie.title }</h1>
              <h6>{ movie.tagline }</h6>
              <hr />
              <div className="movie-genre" >
              { 
                movie.genres.map( ( genre, key )=>{
                  return ( <Badge key={ key } className="mr-1" id={ "genre-"+genre.id } variant="secondary">{ genre.name }</Badge> );                  
                } )
              }
              </div>
              <Table borderless={ true } >
                <tbody>
                  <tr>
                    <td>Release Date</td>
                    <td>{ movie.release_date }&nbsp;({movie.status})</td>
                  </tr>
                  <tr>
                    <td>Avg Rating</td>
                    <td>{ movie.vote_average }/10</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>{ movie.runtime } minutes</td>
                  </tr>
                  <tr>
                    <td>Revenue</td>
                    <td>${ movie.revenue }</td>
                  </tr>
                  <tr>
                    <td>Budget</td>
                    <td>${ movie.budget }</td>
                  </tr>
                  <tr>
                    <td>Adult</td>
                    {
                      movie.adult === true ?
                      <td>Yes</td>:
                      <td>No</td>
                    }
                  </tr>
                </tbody>
              </Table>
              <div className="movie-description">
                <p>
                  { movie.overview }
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Movie;