/**
 * Created by Administrator on 2017/11/28.
 */
//两个计算组件(摄氏温度/华氏温度)
import React,{Component} from 'react'
const scaleNames = {
    c : 'celsius',
    f : 'Fahrenheit'
}
function BoilingVerdict(props){
    return props.celsius >= 100 ? <p>水会烧开</p> : <p>水不会烧开</p>
}
//华氏温度->摄氏温度
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
//摄氏温度->华氏温度
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
//转换函数
function tryConvert(temperature,convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return ''
    }
    ;//非数字
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;//3位有效数字
    return rounded.toString();
}
//温度输入框组件
class  Temperature extends Component{
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
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
            //判断水是否会烧开
            <fieldset>
                <legend>请输入一个{scaleNames[scale]}温度</legend>
                <input value={ temperature} onChange={this.handleChange}/>

                <BoilingVerdict celsius = {parseFloat(temperature)}/>
            </fieldset>
        )
    }
}

class CalculatorTwo extends Component{
    render(){
        return (
            <div>
                <Temperature  scale = 'c'/>
                <Temperature scale = "f"/>
            </div>
        )
    }
}
export default CalculatorTwo