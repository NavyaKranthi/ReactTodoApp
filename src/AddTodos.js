import React, { Component } from "react"

class AddTodos extends Component {
    state = {
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodos(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new Todo</label>
                    <input type="text" onChange={this.handleChange} />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
export default AddTodos