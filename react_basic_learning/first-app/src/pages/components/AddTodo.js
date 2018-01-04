import React,{Component} from 'react'
import PropTypes from 'prop-types'
class AddTodo extends Component{
    handleClick(e){
        const node = this.refs.input;
        const text = node.value.trim();

        this.props.onAddClick(text);
    }
    render() {
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }
}
AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}

export default AddTodo