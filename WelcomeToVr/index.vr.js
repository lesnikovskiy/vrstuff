import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  Model,
  PointLight,
  View,
} from 'react-vr';

import { Blink } from "./components/Blink";
import { Greeting } from "./components/Greeting";
import { Boxes } from "./components/Boxes";
import { ObjectsDemo } from "./components/ObjectsDemo";
import { AnimPlayground } from "./components/AnimPlayground";

export default class WelcomeToVr extends React.Component {
  render() {
    return (
      <View>
        <ObjectsDemo />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVr', () => WelcomeToVr);
