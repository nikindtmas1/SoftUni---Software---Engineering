import { Component} from "react";

class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: 11
        }
    }

    render(){
        return (
            <div className='Counter'>
                <h3>Book Counter</h3>
                <span>{this.state.count}</span>
                <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
            </div>
            )
    }
}

export default Counter;