import React,{Component} from 'react'
//组件嵌套
//头像组件
class Avatar extends Component{
    render(){
        return (
            <img src={this.props.user.avatarUrl} alt={this.props.user.name}/>
        )
    }
}
//用户组件
class UserInfo extends Component{
    render(){
        return (
            <div className="UserInfo">
                <Avatar user={this.props.user}/>
                <div className="UserInfo-name">
                    {this.props.user.name}
                </div>
            </div>
        )
    }
}

class Comment extends Component{
    constructor(props){
        super(props);//默认会有这句话
    }
    //组件嵌套
    render(){
        return (
            <div className='Comment'>
                <UserInfo user={this.props.author}/>
                <div className="Comment-text">{this.props.text}</div>
                <div className="Comment-date">{this.formateDate(this.props.date)}</div>
            </div>
        )
    }
    formateDate(date){
        console.log(date);
    }
}

export default Comment
