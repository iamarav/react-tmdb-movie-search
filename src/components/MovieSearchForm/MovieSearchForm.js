import React, { Component } from 'react'
import styles from './MovieSearchForm.module.css';

import api from '../../api.tmdb'

import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import fMovie from '../../functions/movie'
import { Redirect } from 'react-router-dom';

class MovieSearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
      searchResults: []
    }
  }
  
  doSearch = ( SEARCH_QUERY ) =>{
    SEARCH_QUERY = SEARCH_QUERY.trim()
    SEARCH_QUERY !== "" &&
    SEARCH_QUERY !== undefined ?
      fetch(
        api.search_movie( SEARCH_QUERY )
        ).then(
          response => response.json()
        ).then(
          result => {
            const filtered_results = result.results.filter((item, key) => {
              if (key <= 5 && key > 0) {
                return item;
              }
              return false;
            });
            this.setState({
              searchResults: filtered_results
            })
          }
        )
    :
    this.setState({
      searchResults: []
    });
  }

  searchQueryHandler = ( value ) =>{
    this.setState({
      searchQuery: value.trim() // to avoid unusual whitespaces.
    })
  }

  render() {
    return (
      <div className={styles.MovieSearchForm}>
        {
          this.state.selectedMovie !== undefined &&
          this.state.selectedMovie !== "" ?
            ( 
              <Redirect to={ fMovie.processMovieURL( this.state.selectedMovie, true ) } />
            ):null
        }
        <Typeahead
          id="tt_movie_search_input"
          onChange={ 
            (selected)=>{
              // console.log(selected)
              this.setState({
                selectedMovie: selected[0].id
              })
              window.location.href=fMovie.processMovieURL( selected[0].id, true )
            }
          }
          options={
            this.state.searchResults
          }
          minLength={2}
          labelKey="title"
          onInputChange={
            ( value )=>{
              this.searchQueryHandler( value.trim() )
              this.doSearch( value.trim() )
            }
          }
          placeholder="Enter a movie name..."
          />
      </div>
    )
  }
}


export default MovieSearchForm;