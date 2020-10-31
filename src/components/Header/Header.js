import React, { PureComponent } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Routes from '../../Routes.json'

class Header extends PureComponent {
  constructor(props) {
    super(props)
    this.state={}
  }
  
  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand >{ process.env.REACT_APP_NAME }</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to={ Routes.home.path } className="nav-link">Home</Link>
          </Nav.Item>
          {/* <Nav.Item>        
            <Link className="nav-link" to={ fMovie.processMovieURL( 157336, true ) }>Search Movie</Link>
          </Nav.Item> */}
          <Nav.Item>
            <Link className="nav-link" to={ Routes.about.path }>
              About
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
    )
  }
}


export default Header;