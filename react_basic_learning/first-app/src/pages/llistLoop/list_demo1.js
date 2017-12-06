/**
 * Created by Administrator on 2017/11/27.
 */
import React,{Component} from 'react'
class CreatList extends Component{
    render(){
        const numbers = [1,2,3,4,5];
        const listItems = numbers.map((num) => <li key={num.toString()}>{num}</li>
        )
        return (
            <ul>{listItems}</ul>
        )
    }
}
export default CreatList
