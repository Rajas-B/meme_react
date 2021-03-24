import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import todosData from './todosData.js'

class TodosItem extends Component {
    constructor(props){
      super()
      this.state ={
        item: props.item,
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){
      const newItem = this.state.item
      newItem.completed = !newItem.completed
      this.setState({
        item: newItem
      })
    }
    render() {
       return (
          <div>
            <input onChange={this.handleChange} type="checkbox" id={this.state.item.id} name={this.state.item.text} checked={this.state.item.completed}/>
            <label className={this.state.item.completed?"checked" : null} for={this.state.item.text}>{this.state.item.text}</label>
          </div>
            )
      }
    }
    
export default TodosItem