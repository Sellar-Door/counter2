import React from 'react'
import Counter from '../components/component.js'

class CounterContainer extends React.Component{
    state = {
        number: 0
    }

    Up = () => {
        this.setState({number: this.state.number+1})
    }

    Down = () => {
        this.setState({number: this.state.number-1})
    }

    render(){
        return(
            <Counter handleUp={this.up} handleDown={this.down} number={this.state.number}></Counter>
        )
    }
}

export default CounterContainer