import { Component } from "react";

class Message extends Component{

    constructor(props){
        super(props)

        console.log('Constructor');
    }

    render(){
        return <span>{this.props.text}</span>
    }
}

export default Message;