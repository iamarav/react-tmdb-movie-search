import React, { Component } from 'react'
import styles from './HomePage.module.css';
import { Container, Jumbotron } from 'react-bootstrap';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm'

export default class HomePage extends Component {
  render() {
    return (
      <div className={styles.HomePage}>
        <Jumbotron>
          <div className="text-center page-heading">
            <h1>{ process.env.REACT_APP_NAME }</h1>
          </div>
          { 
            process.env.REACT_APP_DESCRIPTION !== undefined && 
            process.env.REACT_APP_DESCRIPTION.trim() !== "" ?
              ( 
                <div className="text-center page-description">
                  <p>{ process.env.REACT_APP_DESCRIPTION }</p> 
                </div>
              ):
              null
          }
          <hr />
          <div className="mt-3">
            <Container>
              <MovieSearchForm
                customPlaceholder="Enter the movie name..."
              />
            </Container>
          </div>
        </Jumbotron>
      </div>
    )
  }
}