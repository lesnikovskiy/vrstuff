import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

class NestedMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello Visual World"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({message: "Compoonent Mounted"});
  }

  handleClick() {
    this.setState({message: "Updated Message"})
  }

  render() {
    return (
      <View>
        <VrButton onClick={this.handleClick}>
            <Text style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 0, -5] }]
            }}>{this.state.message}</Text>
        </VrButton>
      </View>
    );
  }
}

export default class HelloVirtualWorld extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('pano.jpg')} />
        <NestedMessage message={"Hello Visual World"} />
      </View>
    );
  }
};

AppRegistry.registerComponent('HelloVirtualWorld', () => HelloVirtualWorld);
