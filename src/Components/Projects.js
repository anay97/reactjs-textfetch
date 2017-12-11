import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h1>Hello from Projects to {this.props.name}!</h1>
      </div>
    );
  }
}

export default Projects;