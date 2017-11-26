/**
 * Created by Administrator on 2017/11/26.
 */
import React,{Component} from 'react'
import '../style.css'
function WarnningBar(props){
    if(!props.warn){
        return null;
    }else{
        return (
            <div className="warning">
                Warning!
            </div>
        )
    }
}
class Page extends Component{
    constructor(props){
        super(props);
        this.state = {isShowWraning : true};
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(){
        // this.setState(prevState => ({
        //     isShowWraning: !prevState.isShowWraning
        // }))
        //区别是？
        this.setState({
            isShowWraning: !this.state.isShowWraning
        })
    }
    render(){
        return (
            <div>
                <WarnningBar warn = {this.state.isShowWraning}/>
                <button onClick={this.handleToggle}>
                    {this.state.isShowWraning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}
export default Page