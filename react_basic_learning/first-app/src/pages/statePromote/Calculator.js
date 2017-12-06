/**
 * Created by Administrator on 2017/11/28.
 */
//单个计算组件(摄氏温度)
import React,{Component} from 'react'
function BoilingVerdict(props){
    return props.celsius >= 100 ? <p>水会烧开</p> : <p>水不会烧开</p>
}
class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {temperature : ''}
    }
    handleChange = (e) => {
        this.setState({
            temperature : e.target.value
        })
    }
    render(){
        const temperature = this.state.temperature
        return(
            //判断水是否会烧开
            <fieldset>
                <legend>请输入一个摄氏温度</legend>
                <input value={temperature} onChange={this.handleChange}/>

                <BoilingVerdict celsius = {parseFloat(temperature)}/>
            </fieldset>
        )
    }
}
export default Calculator