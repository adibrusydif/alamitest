import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../utils';

const Separator = () => {
  return <View style={style.separator} />;
};

const style = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: Colors.blueSoft,
  },
});

export default Separator;
