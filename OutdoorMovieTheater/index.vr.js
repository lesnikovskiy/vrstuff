import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sound,
  VideoPano
} from 'react-vr';

import MainMenu from './Components/Scenes/MainMenu.js';

export default class OutdoorMovieTheater extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('fort-night.jpg')}>
          <Sound 
            volume={0.8}
            loop={true}
            source={{mp3: asset('background.mp3')}} />
        </Pano>
        {/* <VideoPano source={
          asset('video-pano-test.mp4', { format: 'mp4', layout: 'SPHERE' })
        }>
          <Sound 
            volume={0.8}
            loop={true}
            source={{mp3: asset('background.mp3')}} />
        </VideoPano> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('OutdoorMovieTheater', () => OutdoorMovieTheater);
