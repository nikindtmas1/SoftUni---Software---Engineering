import { Component } from "react";

class Message extends Component{

    constructor(props){
        super(props)

        console.log('Constructor');

        this.state = {
            company: 'SoftUni'
        }
    }

    componentDidMount(){
        console.log('ComponentDidMount');

        setTimeout(() => {
            this.setState({company: 'Software university'})
        }, 1000)
    }

    componentDidUpdate(){
        console.log('ComponentDidUpdate');
    }

    render(){
        console.log('Render');
        return <span>{this.props.text} | {this.state.company}</span>
    }
}

export default Message;