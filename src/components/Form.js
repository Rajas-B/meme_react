import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class TestForm extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: ""
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}):this.setState({[name]: value})
    }
    handleSubmit(){

    }
    render(){
        let gender;
        let favColor;
        if(this.state.gender !== ""){
            gender = <h2>You are a {this.state.gender}</h2>
        }
        if(this.state.favColor !==""){
            favColor = <h2>Your favorite color is {this.state.favColor}</h2>
        }
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="First name" name="firstName" 
                    value={this.state.firstName} 
                    onChange={this.handleChange} 
                />
                <br></br>
                <input 
                    type="text" 
                    placeholder="Last name" 
                    name="lastName" 
                    value={this.state.lastName} 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="checkbox" 
                    name="isFriendly" 
                    onChange={this.handleChange}
                    checked = {this.state.isFriendly}
                />is Friendly??
                <br/>
                <label>
                <input 
                    type="radio" 
                    name="gender"
                    value="male"
                    onChange={this.handleChange} 
                    checked= {this.state.gender === "male"}
                />Male
                </label>
                <br />
                <label>
                <input 
                    type="radio" 
                    name="gender"
                    value="female" 
                    onChange={this.handleChange} 
                    checked = {this.state.gender === "female"}
                />Female
                </label>
                <br />
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="Blue">Blue</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Purple">Purple</option>
                    <option value="Green">Green</option>
                </select>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                {gender}
                {favColor}
                <button>Submit</button>   
            </form>
        )
    }
}

export default TestForm