import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Conditional extends Component{
    render(){
        return(
            <div>
                {this.props.isLoading === true ? <h1>Loading...</h1> : <h1>Done loading</h1>}
            </div>
        )
    }
    
}

export default Conditional