//数据自订向下流动
import React,{Component} from 'react'
class Clock extends Component{
    constructor(props){
        super(props);
        // this.state = {date : props.date}
    }
    // componentDidMount(){
    //     this.timerID = setInterval(() => this.tick(),1000)
    // }
    // tick(){
    //     this.setState({
    //         date : new Date()
    //     })
    // }
    // componentWillUnmount(){
    //     clearInterval(this.timerID);
    // }
    render(){
        return (
            <h1>It is {this.props.date}.</h1>
        )
    }
}

class Clocks extends Component{
    render(){
        return (
            <div>
                <Clock date={new Date().getTime() + 1000}/>
                <Clock date={new Date().getTime() + 2000}/>
                <Clock date={new Date().getTime() + 3000}/>
            </div>
        )
    }
}

export default Clocks