/*
   简易登陆控制
 */
import React,{Component} from 'react'
//提示组件信息
//用户已经登陆
// class UserGreeting extends Component {
//     render() {
//         return <h1>Welcome Back!</h1>
//     }
// }
// class GuestGreeting extends Component {
//     render() {
//         return <h1>Please Sign Up!</h1>
//     }
// }
function UserGreeting(){
    return <h1>Welcome Back!</h1>
}
function GuestGreeting(){
    return <h1>Please Sign Up!</h1>
}
//提示信息组件
class Greet extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <UserGreeting/>;
        } else {
            return <GuestGreeting/>;
        }
    }
}
//登陆组件
class LoginButton extends Component{
    render() {
        return (
            <button onClick={this.props.onClick}>LoginIn</button>
        )
    }
}
//退出登陆组件
class LoginOutButton extends Component{
    render() {
        return (
            <button onClick={this.props.onClick}>LoginOut</button>
        )
    }
}
class LoginControl extends Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn : false}//默认未登陆
        this.handleLoginIn = this.handleLoginIn.bind(this);
        this.handleLoginOut = this.handleLoginOut.bind(this);
    }
    handleLoginOut(){
        this.setState({
            isLoggedIn : false
        })
    }
    handleLoginIn(){
        this.setState({
            isLoggedIn : true
        })
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if(isLoggedIn){
            button = <LoginOutButton onClick = {this.handleLoginOut}/>;
        }else{
            button = <LoginButton onClick={this.handleLoginIn}/>;
        }
        return (
            <div>
                <Greet isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

export default LoginControl