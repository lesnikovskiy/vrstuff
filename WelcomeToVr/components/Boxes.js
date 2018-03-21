import React, { Component } from 'react';
import { View, Text } from 'react-vr';

export class Boxes extends Component {
    constructor(props) {
        super(props);

        this.state = {bgColor: 'red'};
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                width: 2,
                alignItems: 'stretch',
                transform: [{ translate: [-1, 1, -5] }]
            }}>

                <View style={{ margin: 0.1, height: 0.3, backgroundColor: this.state.bgColor }}
                    onEnter={() => this.setState({ bgColor: 'orange' })}
                    onExit={() => this.setState({ bgColor: 'red' })}>
                    <Text style={{ fontSize: 0.2, textAlign: 'center' }}>Red</Text>
                </View>

                <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange' }}>
                    <Text style={{ fontSize: 0.2, textAlign: 'center' }}>Orange</Text>
                </View>

                <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'yellow' }}>
                    <Text style={{ fontSize: 0.2, textAlign: 'center' }}>Yellow</Text>
                </View>

                <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'blue' }}>
                    <Text style={{ fontSize: 0.2, textAlign: 'center' }}>Blue</Text>
                </View>

            </View>
        );
    }
}
