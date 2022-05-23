import React from 'react'
import { Component } from "react"
import Button from '../Button/Button'

class CountClass extends Component {
 constructor(props) {
  super(props)
 this.state = { count : 0}
 }

 decrement = () => {
    this.setState({ 
    count: this.state.count -1
    // for(let i = 0; i <5; i ++){
    //     console.log(`vuelta ${i +1}`)
    //     setCount((prev) => prev-1)
    })
}

//  increment = () => {
//     this.setState ({
//         count: this.state.count +1
//     })
// }
    render() {
        return (
            <div style={{ display: 'flex'}}>
<Button handleClick={this.decrement} label='-' color='red'> 
        -
        </Button>
        {/* <h1>{count}</h1> */}
        <Button handleClick={this.increment} label='+' color='blue'> 
        +
        </Button>
        </div>
        )      
    }
 }
export default CountClass;
