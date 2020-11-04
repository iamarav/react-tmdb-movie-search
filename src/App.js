import React, { Component } from 'react'
import { 
    HashRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'
import './App.css';

import Routes from './Routes.json'
import HomePage from './components/HomePage/HomePage'
import ErrorPageNotFound from './components/ErrorPageNotFound/ErrorPageNotFound'
import MovieInfoPage from './components/MovieInfoPage/MovieInfoPage.lazy'
import AboutPage from './components/AboutPage/AboutPage.lazy'
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path={ Routes.home.path } component={ props => <HomePage { ...props } /> } />
            <Route exact path={ Routes.movie_page.path } component={ props => <MovieInfoPage {...props} /> } />
            <Route exact path={ Routes.about.path } component={ props => <AboutPage { ...props } /> } />
            <Route component={()=> <ErrorPageNotFound /> } />
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App;