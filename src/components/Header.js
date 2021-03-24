import React, {Component} from "react"
import ReactDom from "react-dom"

class Header extends Component{
    constructor(){
        super()
        this.state= {

        }
    }
    render(){
        return(
            <header>
                <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Problem?" />
            </header>
        )
    }
}
export default Header