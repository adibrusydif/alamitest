import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import {Colors, Fonts, Images} from '../../../utils';

const Stepper = () => {
  const [count, setCount] = useState(0);

  const onMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onPlus = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onMinus}>
        <Image source={Images.iconMinus} style={styles.icon} />
      </TouchableOpacity>
      <TextInput
        style={styles.counter}
        keyboardType={'numeric'}
        maxLength={7}
        textAlign={'center'}
        value={count.toString()}
        onChangeText={() => setCount}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={onPlus}>
        <Image source={Images.iconPlus} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counter: {
    fontFamily: Fonts.INTER_REGULAR,
    color: Colors.black,
    width: 40,
    marginHorizontal: 4,
  },
  icon: {
    width: 18,
    height: 18,
  },
});

export default Stepper;
