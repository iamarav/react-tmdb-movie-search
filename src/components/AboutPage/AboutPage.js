import React, { PureComponent } from 'react'
import { Container } from 'react-bootstrap';
import styles from './AboutPage.module.css';

class AboutPage extends PureComponent {
  render() {
    return (
      <div className={styles.AboutPage}>
        <Container className="mt-3">
          <h1>About</h1>
          <hr />
          <p>
            Search for movies by name. 
            Made with&nbsp;
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer" >React.JS</a> and&nbsp;
            <a href="https://www.themoviedb.org/settings/api" target="_blank" rel="noreferrer" >TMDB Api</a>.  
          </p>
          <p>
            Developer:&nbsp;
            <a href="https://github.com/iamarav" title="Github @iamarav" >Gaurav Sachdeva</a>
            &nbsp;|&nbsp;
            <a href="https://iamarav.github.io/redirect?to=blog" title="Blog" >Blog</a>
            <br />
            <a href="https://github.com/iamarav/react-tmdb-movie-search">Fork on GitHub</a>
          </p>
        </Container>
      </div>
    )
  }
}


export default AboutPage;