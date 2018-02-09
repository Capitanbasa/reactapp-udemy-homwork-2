import React, { Component } from 'react';
import CharComponent from './CharComponent';
import ValidationComponent from './ValidationComponent'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      chartexts : [],
      letterString : '',
      letterCount : 0,
      message : null
    }
  }
  countingLetterHandler = (stringval) => {
    const allLetter =  stringval.target.value;
    const splitedLetter = [...allLetter];
    this.setState({letterString : stringval.target.value});
    this.setState({chartexts : splitedLetter});
    this.setState({letterCount : allLetter.length});
    this.setState({letterString : splitedLetter.join('')});
    if(allLetter.length > 10){
      this.setState({message : 'Your exceded in the minimum 10 count of letters'});
    }else{
      this.setState({message : null});
    }
  }
  deleteCharHandler = (eventid) => {
    const letterslist = [...this.state.chartexts];
    letterslist.splice(eventid, 1);
    this.setState({chartexts : letterslist});
    this.setState({letterCount : letterslist.length});
    this.setState({letterString : letterslist.join('')});
  }

  render() {

    return (
      <div className="App">
        <div>
          <input value={this.state.letterString} className="input-text" onChange={this.countingLetterHandler.bind(this)}/>
          <p className="p-string">String Count : {this.state.letterCount}</p>
        </div>
        <div>
          <ValidationComponent message={this.state.message}/>
        </div>
        <div>
          <CharComponent letterArray={this.state.chartexts} click={ (event) => this.deleteCharHandler(event) }/>
        </div>
      </div>
    );
  }
}

export default App;
