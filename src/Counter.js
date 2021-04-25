import React from 'react';

class Counter extends React.Component{
    constructor({ InitialCount, changeInitCount }){
        super()
        this.state = {counter: InitialCount}
        changeInitCount(100);
    }

    changeCount=(op)=>{
       if (op === "+")
       {
           this.setState({ counter: this.state.counter + 1})
       }
       else if(op === "-")
       {
        this.setState({ counter : this.state.counter - 1})
       }

       
       
    }

    render(){
        return(
            <div className="container" style={{
                marginTop: "200px"
            }}>
                <div className="fs-1">{ this.state.counter }</div>
                <button className="btn btn-success mt-5 me-md-3" onClick = {()=>this.changeCount("+")}>Increment</button>
                <button className="btn btn-danger mt-5" onClick = {()=>this.changeCount("-")}>Decrement</button>
 
            </div>
            
        )
    }


}
export default Counter