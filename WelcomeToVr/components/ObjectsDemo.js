import React, { Component } from 'react';
import {
    asset,
    Pano,
    Model,
    PointLight,
    View,
    Cylinder
} from 'react-vr';

export class ObjectsDemo extends Component {
    constructor(props) {
        super(props);

        this.state = { rotation: 0 };
        this.lastUpdate = Date.now();

        this.rotate = this.rotate.bind(this);
    }

    rotate() {
        const now = Date.now();
        const delta = now - this.lastUpdate;
        this.lastUpdate = now;

        this.setState({ rotation: this.state.rotation + delta / 20 });
        this.frameHandle = requestAnimationFrame(this.rotate);
    }

    componentDidMount() {
        this.rotate();
    }

    componentWillUnmount() {
        if (this.frameHandle) {
            cancelAnimationFrame(this.frameHandle);
            this.frameHandle = null;
        }
    }

    render() {
        return (
            <View>
                <Pano source={asset('sky.jpg')} />

                <Cylinder
                    radiusTop={0.5}
                    radiusBottom={0.5}
                    dimHeight={2}
                    segments={12}
                    />

                <Model
                    style={{
                        transform: [
                            { translate: [0, -25, -115] },
                            { scale: 0.1 },
                            { rotateY: this.state.rotation },
                            { rotateX: -90 }
                        ]
                    }}
                    source={{
                        obj: asset('creature/creature.obj'),
                        mtl: asset('creature/creature.mtl')
                    }}
                    lit={true} />
                <Model
                    style={{
                        transform: [
                            { translate: [30, -25, 50] },
                            { scale: 0.1 },
                            { rotateY: this.state.rotation },
                            { rotateX: -90 }
                        ]
                    }}
                    source={{
                        obj: asset('chopper/uh60.obj'),
                        mtl: asset('chopper/uh60.mtl')
                    }}
                    lit={true} />
                <Model
                    style={{
                        transform: [
                            { translate: [0, 25, -7] },
                            { scale: 0.1 },
                            { rotateY: this.state.rotation },
                            { rotateX: -90 }
                        ]
                    }}
                    source={{
                        obj: asset('earth/earth.obj'),
                        mtl: asset('earth/earth.mtl')
                    }}
                    lit={true} />
                <PointLight style={{ color: 'white', transform: [{ translate: [0, 400, 700] }] }} />
            </View>
        );
    }
}