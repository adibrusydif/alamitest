import React from 'react';
import {View} from 'react-native';
import DeviceInfo from './DeviceInfo/DeviceInfo';
import Progress from './Progress/Progress';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <DeviceInfo />
      <Progress />
    </View>
  );
};

export default Home;
