import React,{Component} from 'react'
//温度转换函数
function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius){
    return celsius * 9 / 5 + 32
}

function tryConvert(temperature,fn){
    if(Number.isNaN(parseFloat(temperature))){//是否是数字
        return ''
    }
    const output = typeof fn === 'function' && fn(temperature);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
//是否烧开的状态显示
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <h1>水会烧开</h1>
    }
    return <h1>水不会被烧开</h1>
}
const scaleNames = {'f' : '华氏温度','c' : '摄氏温度'}
class Temperature extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);//调用父级事件
    }
    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>在{scaleNames[scale]}:中输入温度的值</legend>
                    <input type="number" value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}
class CalculatorTwo extends Component{
    constructor(props){
        super(props);
        this.state = {temperature : '',scale : 'c'}
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    componentWillMount(){
        window.location.href = 'http://localhost:63342/phoneSearchPro/src/test1.html'
    }
    handleFahrenheitChange(temperature){
        this.setState({
            scale : 'f',
            temperature
        })
    }
    handleCelsiusChange(temperature){
        this.setState({
            scale : 'c',
            temperature
        })
    }
    render(){
        //获取当前温度类型
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        //换算摄氏/华氏温度
        //摄氏温度
        const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;
        return(
            <div>
                <Temperature onTemperatureChange={this.handleCelsiusChange}
                    temperature = {celsius}
                    scale = 'c'
                />
                <Temperature onTemperatureChange = {this.handleFahrenheitChange}
                    temperature = {fahrenheit}
                    scale = 'f'
                />

                <BoilingVerdict celsius = {parseFloat(celsius)}/>
            </div>
        )
    }
}

export default CalculatorTwo