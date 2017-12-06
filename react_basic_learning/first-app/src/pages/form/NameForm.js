/**
 * Created by Administrator on 2017/11/28.
 */
//模拟双向绑定
import React,{Component} from 'react'
class NameFrom extends Component{
    constructor(props){
        super(props);
        this.state = {value : ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    //输入框内容改变
    handleChange(e){
        this.setState({
            value : e.target.value
        })
    }
    //点击提交
    handleSubmit(e){
        alert('a field was submit : ' + this.state.value);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value = {this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default NameFrom