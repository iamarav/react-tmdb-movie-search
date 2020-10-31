import React, { Component } from 'react'
import styles from './ErrorPageNotFound.module.css';

class ErrorPageNotFound extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  
  render() {
    return (
      <div className={styles.ErrorPageNotFound}>
        {
          this.props.customMessage === undefined ? 
          "Page Not found":
          this.props.customMessage
        }
      </div>
    )
  }
}


export default ErrorPageNotFound;