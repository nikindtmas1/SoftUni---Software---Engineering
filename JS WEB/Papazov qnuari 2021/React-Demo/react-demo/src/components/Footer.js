import { Component } from "react";
import Message from './Message';

class Footer extends Component {

    constructor(props){
        super(props)

        // this.state = {
        //     showFooter: true
        // }
    }

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({showFooter: false})
    //     }, 2500)
    // }

    render(){
        console.log(this.props.refreshCount);
        return this.props.refreshCount && (
            <Message text='All rights reserved' />
        )
    }
}

export default Footer;