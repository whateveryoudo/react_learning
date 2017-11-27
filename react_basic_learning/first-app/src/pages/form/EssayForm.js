/**
 * Created by Administrator on 2017/11/28.
 */
//textarea 双向绑定
import React,{Component} from 'react'
class EssayForm extends Component{
    constructor(props){
        super(props);
        this.state = {value : 'write a favirite description'}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            value : e.target.value
        })
    }
    handleSubmit = (e) => {
        alert('desc is' + this.state.value);
        e.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                    <p>{this.state.value}</p>
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}
export  default EssayForm
