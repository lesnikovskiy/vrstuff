import React, { Component } from 'react';
import { Text } from 'react-vr';

export class Blink extends Component {
  constructor(props) {
    super(props);

    this.state = { showText: true };

    setInterval(() => {
      this.setState({ showText: !this.state.showText })
    }, 1000);
  }

  render() {
    const display = this.state.showText ? this.props.text : ' ';

    return (
      <Text>{display}</Text>
    );
  }
}
