import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

class Title extends React.Component {
  constructor() {
    super();

    this.state = { title: "Panoramic Road Trip" };
  }

  render() {
    return (
      <View>
        <Text style={{
          fontSize: 0.2,
          textAlign: 'center',
          color: '#CF3C7E'
        }}>
          {this.state.title}
        </Text>
      </View>
    );
  }
}

class TextBoxes extends React.Component {
  render() {
    return (
      <View>
        <VrButton onClick={() => this.props.stateClicked(1)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E' }}>
            <Text style={{ fontSize: 0.2, textAlign: 'center' }}>{this.props.states.Arizona}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(2)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E' }}>
            <Text style={{ fontSize: 0.2, textAlign: 'center' }}>{this.props.states.NewHampshire}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(3)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E' }}>
            <Text style={{ fontSize: 0.2, textAlign: 'center' }}>{this.props.states.California}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(4)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E' }}>
            <Text style={{ fontSize: 0.2, textAlign: 'center' }}>{this.props.states.Hawaii}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(5)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E' }}>
            <Text style={{ fontSize: 0.2, textAlign: 'center' }}>{this.props.states.Texas}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(6)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#CF3C7E' }}>
            <Text style={{ fontSize: 0.2, textAlign: 'center' }}>{this.props.states.Italy}</Text>
          </View>
        </VrButton>
      </View>
    );
  }
}

export default class PanoramicRoadTrip extends React.Component {
  constructor() {
    super();

    this.state = { selectedState: "" };

    this.stateClicked = this.stateClicked.bind(this);
  }

  componentDidMount() {
    const random = Math.floor((Math.random() * 5) + 1);

    let randState;
    switch (random) {
      case 1:
        randState = "Arizona";
        break;
      case 2:
        randState = "New Hampshire";
        break;
      case 3:
        randState = "California";
        break;
      case 4:
        randState = "Hawaii";
        break;
      case 5:
        randState = "Texas";
        break;
      case 6:
        randState = "Italy";
        break;
    }

    console.log(randState);

    this.setState({ selectedState: randState });
  }

  stateClicked(selection) {
    let newState;

    switch (selection) {
      case 1:
        newState = "Arizona";
        break;
      case 2:
        newState = "New Hampshire";
        break;
      case 3:
        newState = "California";
        break;
      case 4:
        newState = "Hawaii";
        break;
      case 5:
        newState = "Texas";
        break;
      case 6:
        newState = "Italy";
        break;
    }

    console.log(newState);
    this.setState({ selectedState: newState })
  }

  render() {
    const states = {
      Arizona: "Arizona",
      NewHampshire: "New Hampshire",
      California: "California",
      Hawaii: "Hawaii",
      Texas: "Texas",
      Italy: "Italy"
    };

    return (
      <View>
        <Pano source={asset(`${this.state.selectedState}.jpg`)} />
        <View style={{
          flex: 1,
          width: 2,
          flexDirection: 'column',
          alignItems: 'stretch',
          layoutOrigin: [0.5, 0.5],
          transform: [{ translate: [0, 0, -5] }]
        }}>
          <Title />
          <TextBoxes states={states} stateClicked={this.stateClicked} />
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('PanoramicRoadTrip', () => PanoramicRoadTrip);
