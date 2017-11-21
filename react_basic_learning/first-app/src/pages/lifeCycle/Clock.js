/**
 * Created by lenovo on 2017/11/21.
 */
//时钟组件
import React,{Component} from 'react'
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()}//自身 状态
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000)
    }
    tick(){//每次设置新的日期值
        this.setState({
            date : new Date()
        })
    }
    componentWillUnmount(){
        //移除定时器
        clearInterval(this.timerID);
    }
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <p>Current Time : {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock