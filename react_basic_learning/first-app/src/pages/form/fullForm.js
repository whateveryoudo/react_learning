/**
 * Created by Administrator on 2017/11/28.
 */
import React,{Component} from 'react'
class FullForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            isAgree : false,
            numberGuest : 20
        }
    }
    handleSubmit = (event) => {
        console.log('提交字段：' + this.state.isAgree + ',' + this.state.numberGuest);
        event.preventDefault();
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        //计算属性双向绑定
        this.setState({
            [name] : value
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    isAgree:
                    <input name="isAgree" type="checkbox" checked={this.state.isAgree} onChange={this.handleInputChange}/>
                </label>
                <label>
                    GuestNums :
                    <input name="numberGuest" type="number" value={this.state.numberGuest} onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}
export default FullForm