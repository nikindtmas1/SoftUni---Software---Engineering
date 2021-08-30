import { Component} from "react";

class Counter extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='Counter'>

                <span>10</span>
                <button>+</button>
            </div>
            )
    }
}

export default Counter;