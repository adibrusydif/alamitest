import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Colors, Images} from '../../../utils';

const WorkingExperience = () => {
  return (
    <View style={styles.container}>
      <Text>Working Experience</Text>
      <View style={styles.card}>
        <Image source={Images.sicepat} style={styles.imageContainer} />
        <View style={styles.content}>
          <Text style={styles.textTitle}>PT. Sicepat Express Indonesia</Text>
          <Text>Senior Mobile Engineer</Text>
          <Text style={styles.textMini}>
            - Create From the Scratch Instant Delivery Apps for Driver with
            React Native
          </Text>
          <Text style={styles.textDate}>
            June 2021 - Present (1 years 2 month)
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={Images.ralali} style={styles.imageContainer} />
        <View style={styles.content}>
          <Text style={styles.textTitle}>PT. Raksasa Laju Lintang</Text>
          <Text>Lead Mobile Engineer</Text>
          <Text style={styles.textMini}>
            - Manage Mobile Team on Ralali.com
          </Text>
          <Text style={styles.textMini}>
            - Developing Ralali.com Apps with React native
          </Text>
          <Text style={styles.textMini}>
            - Developing Big Agent Apps with React native
          </Text>
          <Text style={styles.textMini}>
            - Developing Ralali Seller Apps with React native
          </Text>
          <Text style={styles.textDate}>
            March 2018 - June 2021 (3 years 4 month)
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={Images.urbanhire} style={styles.imageContainer} />
        <View style={styles.content}>
          <Text style={styles.textTitle}>Urbanhire</Text>
          <Text>Frontend Engineer</Text>
          <Text style={styles.textMini}>
            - Developing urbanhire career page with react native
          </Text>
          <Text style={styles.textDate}>Sept 2017 - Feb 2018 (6 month)</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 13,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  card: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: 'row',
  },
  content: {
    marginHorizontal: 16,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 14,
    color: Colors.black,
  },
  textMini: {
    fontSize: 10,
  },
  textDate: {
    fontSize: 12,
    color: Colors.black,
  },
});

export default WorkingExperience;
