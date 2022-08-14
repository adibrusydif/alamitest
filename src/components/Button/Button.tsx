import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../../utils';
import {ButtonInterface} from './button.interface';

const Button = ({
  text,
  color = Colors.blueMiddle,
  textColor = Colors.white,
  onPress,
}: ButtonInterface) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.container, {backgroundColor: color}]}>
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 40,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    textAlign: 'center',
    fontSize: 16,
  },
});
