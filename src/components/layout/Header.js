import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>Find ZIP Codes Near Me</h1>
            </header>
        )
    }
};

const headerStyle = {
    background: '#333333',
    color: '#FFFFFF',
    textAlight: 'center',
    padding: '10px'
};

export default Header;
