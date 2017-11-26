/**
 * Created by lenovo on 2017/11/21.
 */
import React,{Component} from 'react'

class UseState extends Component{
    constructor(props){
        super(props);
        this.state = {aa : 11}
        this.handleAdd = this.handleAdd.bind(this);
    }
    render(){
        return (
            <div>
                <div><b>我是state:{this.state.aa}</b><b>我是prop:{this.props.bb}</b></div>
                <button onClick={this.handleAdd}>点我相加</button>
                <div>我是计算的结果:{this.state.commit}</div>
            </div>
        )
    }
    handleAdd(){
        this.setState((prevState,props) => {
            this.state.aa++;
            return {
                commit : prevState.aa + props.bb
            }
        })
        // this.setState({
        //     commit : this.state.aa + this.props.bb
        // })
    }
}
export default UseState