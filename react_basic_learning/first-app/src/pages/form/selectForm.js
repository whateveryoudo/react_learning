/**
 * Created by Administrator on 2017/11/28.
 */
import React,{Component} from 'react'
class SelectForm extends Component{
    constructor(props){
        super(props);
        this.state = {value : 'apple'}
    }
    handleChange = (e) =>{
        this.setState({
            value : e.target.value
        })
    }
    handleSubmit = (e) => {
        alert('Youy chooice is ' + this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick a item flavor :
                    <select onChange={this.handleChange}>
                        <option value="apple">apple</option>
                        <option value="orange">orange</option>
                        <option value="bear">bear</option>
                        <option value="banner">banner</option>
                    </select>
                </label>
                <input type="submit" value='submit'/>
            </form>
        )
    }
}
export  default SelectForm