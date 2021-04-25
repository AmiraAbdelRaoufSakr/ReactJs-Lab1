import './App.css';
import React from 'react';
import Counter from './Counter';
import DisplayData from './DisplayData';

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
      <DisplayData/>
    </div>
  );
}
}
export default App;
