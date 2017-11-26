/**
 * Created by Administrator on 2017/11/26.
 */
import React,{Component} from 'react'

class Toggle extends Component{
    constructor(props){
        super(props);
        //设置开关控制变量
        this.state = {isToggleOn : true}
        this.handleToggle = this.handleToggle.bind(this);//事件绑定this,否则this为undefined
    }
    handleToggle(){
        console.log(this);
        this.state.isToggleOn ? (
            this.setState({
                isToggleOn : false
            })
            ):(
                this.setState({
                    isToggleOn : true
                })
            )
    }
    render(){
        return (
            <button onClick={this.handleToggle}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Toggle