import './App.css';
import React from 'react';
import Counter from './Counter';

class App extends React.Component  {

  constructor(){
    super()
    this.state = { initialCount: 5}
  }

  setInitialCount=(value)=>{
    this.setState({initialCount: value})
  }
  


  render(){
  return (
    <div className="App">
      <Counter InitialCount={this.state.initialCount} changeInitCount = {this.setInitialCount} />
    </div>
  );
}
}
export default App;
