import React from "react";


export default class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.error) {
      console.log(this.state.error)
      alert("error")
      return <h1>Error</h1>
    }

    return this.props.children
  }
}