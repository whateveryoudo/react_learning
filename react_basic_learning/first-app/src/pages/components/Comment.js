import React,{Component} from 'react'
class Comment extends Component{
    constructor(props){
        super(props);//默认会有这句话
    }
    render(){
        return (
            <div className='Comment'>
                <div className="UserInfo">
                    <img className="Avatar" src={this.props.author.avatarUrl} alt={this.props.author.name}/>
                    <div className="UserInfo-name">{this.props.author.name}</div>
                </div>
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
