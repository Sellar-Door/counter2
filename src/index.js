import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import CounterContainer from './containers/container.js'

class App extends React.Component{
    render(){
        return(
            <div>
                <CounterContainer></CounterContainer>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))