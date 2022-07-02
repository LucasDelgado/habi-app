import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI.
    return { error: error };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.log({ error, info });
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <div>Hubo un error en la page!</div>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  error: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ErrorBoundary;
