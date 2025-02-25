import { Component } from "react";

function refreshComponent(WrappedComponent){
    return class extends Component{
        constructor(props){
            super(props)

            this.state = {
                refreshCount: 0
            }
        }

        componentDidMount(){
            setTimeout(() => {
                this.setState({refreshCount: this.state.refreshCount + 1})
            }, 2000)
        }

        render(){
            return <WrappedComponent {...this.props} />
        }
    }
}

export default refreshComponent;