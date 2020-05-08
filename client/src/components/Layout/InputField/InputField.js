import React, { Component } from 'react';

class InputField extends Component {
    state = {
        value: ''
    }
    handleInput(value) {
        this.setState({
            value
        })
    }

    render() {
        return (
            <div className="input-field">
                <span className="label">Label goes here:</span>
                <input
                    className="input"
                    value={this.state.value}
                    onChange={(e) => this.handleInput(e.target.value)}>
                </input>
            </div>
        )
    }
}


export default InputField;