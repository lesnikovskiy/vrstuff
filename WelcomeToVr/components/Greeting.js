import React, { Component } from 'react';
import { Text } from 'react-vr';

export class Greeting extends Component {
    render() {
        return (
            <Text>Hello, {this.props.name}!</Text>
        );
    }
}
