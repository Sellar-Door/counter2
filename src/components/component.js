import React from 'react'

class Counter extends React.Component {
    render(){
        return(
            <div>
                <h1>This is a counter</h1>
                <h2>{this.state}</h2>
                <button onclick={() => {this.props.handleUp()}}>Up</button>
                <button onclick={() => {this.props.handleDown()}}>Down</button>
            </div>
        )
    }
}

export default Counter