import React, {Component} from "react"
import ReactDOM from "react-dom"
import MemeImage from './MemeImage'


class MemeGenerator extends Component{
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            topText: "",
            bottomText: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
                console.log(this.state.allMemeImgs[0])
            })
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}):this.setState({[name]: value})
    }
    handleSubmit(event){
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMemeImg = this.state.allMemeImgs[randomNumber].url
        this.setState({
            randomImg: randMemeImg
        })  
    }
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="topText" 
                        value={this.state.topText} 
                        placeholder="Enter top text"
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text" 
                        name="bottomText" 
                        value={this.state.bottomText} 
                        placeholder="Enter bottom text"
                        onChange={this.handleChange} 
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <MemeImage imgUrl={this.state.randomImg} />
                    <h2 className="top" >{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}
export default MemeGenerator