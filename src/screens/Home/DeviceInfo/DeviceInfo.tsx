import React, {useState} from 'react';
import {StyleSheet, Text, View, NativeModules} from 'react-native';
import {Button} from '../../../components';
import {Colors, Fonts} from '../../../utils';

const {DeviceModule} = NativeModules;

const DeviceInfo = () => {
  const [deviceId, setDeviceId] = useState('');
  const [deviceName, setDeviceName] = useState('');

  const onGetDeviceId = () => {
    DeviceModule.getDeviceId((res: string) => setDeviceId(res));
    DeviceModule.getDeviceName((res: string) => setDeviceName(res));
  };

  const reset = () => {
    setDeviceId('');
    setDeviceName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Info</Text>
      <View style={styles.content}>
        <Text style={styles.titleText}>
          Device Id: <Text style={styles.value}>{deviceId}</Text>
        </Text>
        <Text style={styles.titleText}>
          Device Name: <Text style={styles.value}>{deviceName}</Text>
        </Text>
        <View style={{marginTop: 20}}>
          <Button text="Get Device Information" onPress={onGetDeviceId} />
          <Button text="Reset" onPress={reset} color={Colors.gray300} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 8},
  content: {padding: 16},
  titleText: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black,
    fontSize: 16,
  },
  value: {
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 14,
  },
  title: {
    color: Colors.blueDark,
    fontSize: 18,
  },
});

export default DeviceInfo;
