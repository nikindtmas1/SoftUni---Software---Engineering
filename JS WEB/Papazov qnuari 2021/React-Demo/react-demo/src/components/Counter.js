import { Component} from "react";

class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: 11
        }
    }
resetCounter(){
    this.setState({count: 0})
}
    render(){
        return (
            <div className='Counter'>
                <h3>Book Counter</h3>
                <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
                <button onClick={this.resetCounter.bind(this)}>Reset</button>
            </div>
            )
    }
}

export default Counter;