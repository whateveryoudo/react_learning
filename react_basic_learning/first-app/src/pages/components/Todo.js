import React,{Component} from 'react'
import PropTypes from 'prop-types'
class Footer extends Component{

    render() {
        return (
            <div>
               <li onClick={this.props.onClick}
                style={{
                    textDecoration : this.props.completed ? 'line-through' : 'none',
                    cursor : this.props.completed ? 'default' : 'pointer'
                }}
               >{this.props.text}</li>
            </div>
        )
    }
}

Footer.propTypes = {
    onClick : PropTypes.func.isRequired,
    text : PropTypes.string.isRequired,
    completed : PropTypes.bool.isRequred
}

export default Footer