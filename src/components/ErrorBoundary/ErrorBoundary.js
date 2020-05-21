import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorMessage: error });
  }

  render() {
    let error = null;

    if  ( this.state.hasError ) {
      error = <h1>Something was wrong!</h1>;
    } else {
      error = this.props.children;
    }

    return error;
  }
}

export default ErrorBoundary;