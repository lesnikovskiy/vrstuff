import React, { Component } from 'react';
import { Animated } from 'react-vr';
export class AnimPlayground extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bounceValue: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // Start large
        Animated.spring(                          // Base: spring, decay, timing
            this.state.bounceValue,                 // Animate `bounceValue`
            {
                toValue: 0.8,                         // Animate to smaller size
                friction: 1,                          // Bouncier spring
            }
        ).start();                                // Start the animation
    }

    render() {
        return (
            <Animated.Image
                source={{ uri: 'XMKOH81.jpg' }}
                style={{
                    flex: 1,
                    width: 1,
                    height: 1,
                    transform: [{ scale: this.state.bounceValue }]
                }} />
        );
    }
}