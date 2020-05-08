import React, { Component } from 'react';

class MyForm extends Component {

    render() {
        return (
            <div>
                <label htmlFor="myZIP" >My ZIP Code</label>
                <input type="text" id="myZIP" name="myZIP" onChange={this.props.handleChange} />
                <label htmlFor="myRadius" >My Radius in Miles</label>
                <input type="number" name="myRadius" min="0" max="25" onChange={this.props.handleChange} />
                <button type="submit" onClick={this.props.getZIPs}>Get ZIP Codes Near Me</button>
            </div>
        )
    }
};



export default MyForm;
