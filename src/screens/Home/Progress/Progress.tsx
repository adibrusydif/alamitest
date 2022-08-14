/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Text, Animated, StyleSheet, Pressable} from 'react-native';
import {Button} from '../../../components';
import {Colors, Fonts} from '../../../utils';

const duration = 10000;

const Progress = () => {
  const progressValue = React.useRef(new Animated.Value(0)).current;
  const [isFinish, setIsFinish] = React.useState(false);
  const [cur, setCur] = React.useState(0);

  const isPaused = React.useRef(false);
  const remaining = React.useRef(1);

  React.useEffect(() => {
    start();
    progressValue.addListener(param => setCur(param.value * 100));
  }, []);

  const restart = () => {
    setIsFinish(false);
    progressValue.setValue(0);
    start();
  };

  const start = () => {
    Animated.timing(progressValue, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        setIsFinish(true);
      }
    });
  };

  const onPause = () => {
    isPaused.current = true;
    progressValue.stopAnimation(value => {
      remaining.current = duration - duration * value;
    });
  };

  const onResume = () => {
    if (isPaused.current) {
      isPaused.current = false;
      Animated.timing(progressValue, {
        toValue: 1,
        duration: remaining.current,
        useNativeDriver: false,
      }).start(({finished}) => {
        if (finished) {
          setIsFinish(true);
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Bar</Text>
      <Text style={styles.percentage}>{cur.toFixed(0)}%</Text>
      <View style={styles.barContainer}>
        <View style={styles.barUnFilled}>
          <Animated.View style={[styles.barFilled, {flex: progressValue}]} />
        </View>
      </View>
      <View style={styles.containerButton}>
        {isFinish ? (
          <Button text="restart" onPress={restart} />
        ) : (
          <Pressable
            onLongPress={onPause}
            onPressOut={onResume}
            delayLongPress={100}
            style={styles.pressable}>
            <Text style={styles.textHold}>Hold</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.white,
  },
  containerButton: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    justifyContent: 'space-around',
  },
  barContainer: {
    padding: 16,
  },
  barUnFilled: {
    height: 8,
    flexDirection: 'row',
    backgroundColor: Colors.gray300,
    marginHorizontal: 2,
    borderRadius: 6,
  },
  barFilled: {
    height: 8,
    backgroundColor: Colors.blueMiddle,
    borderRadius: 6,
  },
  percentage: {
    textAlign: 'center',
    fontFamily: Fonts.INTER_BOLD,
    color: Colors.blueMiddle,
    fontSize: 20,
  },
  pressable: {
    backgroundColor: Colors.blueMiddle,
    width: 80,
    height: 30,
    borderRadius: 5,
  },
  textHold: {
    color: Colors.white,
    textAlign: 'center',
    paddingTop: 5,
    textAlignVertical: 'center',
  },
  title: {
    color: Colors.blueDark,
    fontSize: 18,
  },
});

export default Progress;
