import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
    errorJSX: null
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorMessage: error });
  }

  render() {
    if  ( this.state.hasError ) {
      this.state.errorJSX = <h1>Something was wrong!</h1>;
    } else {
      this.state.errorJSX = this.props.children;
    }

    return this.state.errorJSX;
  }
}

export default ErrorBoundary;