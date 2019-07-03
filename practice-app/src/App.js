import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    username:"george"
    appInputText : ""   
  }

  userInputChangeHandler = (event) => {
    this.setState({
      username:event.target.value
    });
  }

  greetAll = () => {
    return "Hello All";
  }

  appInputChangeHandler = (event) => {
    this.setState( { appInputText: event.target.value } );
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.appInputText.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({appInputText: updatedText});
    return index;
  }

  render() {
    const inputStyle = {
      width:'200px',
      height:'30px',
      boxShadow:'0 2px 3px #ccc',
      margin:'10px 0'
    }

    const charList =  this.state.appInputText.split('').map((ch,index)=>{
      return(
        <CharComponent char={ch}
        key={index}
        clicked={this.deleteCharHandler(index)}
         />
      )
    });
    
    return (
      <div className="App">
        <UserInput style={inputStyle} username={this.state.username} changed={this.userInputChangeHandler} />
        <UserOutput username="Peter" />
        <UserOutput username={this.state.username} />
        <p>{this.greetAll()}</p>
        <input type="text" 
        onChange={this.appInputChangeHandler} 
        value={this.state.appInputText} />
        <p>Length of Entered text is: {this.state.appInputText.length}</p>
        {charList}
      </div>
    );
  }
}

export default App;
