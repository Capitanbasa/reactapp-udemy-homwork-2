import React, { Component } from 'react';

class ValidationComponent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default ValidationComponent;
