import React, { Component } from 'react';
import './App.css';

class CharComponent extends Component {
  render() {
      const listLetter = this.props.letterArray.map((charletter, index) => {
        return <div key={index} onClick={() => this.props.click(index)} className="list-item">{charletter+'-'+index}</div>
    });
    return (
      <div className="list-wrap">
        { listLetter  }
      </div>
    );
  }
}

export default CharComponent;
