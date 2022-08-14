import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Colors, Images} from '../../utils';
import WorkingExperience from './Profile.fragments/WorkingExperience';

const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <Image source={Images.adib} style={styles.imageContainer} />
        <View style={styles.content}>
          <Text style={styles.textTitle}>Adib Rusydi Fikri</Text>
          <Text>Senior Mobile Engineer</Text>
          <Text style={styles.textMini}>
            JavaScript/TypeScript - React Native
          </Text>
          <Text>26 Years Old - Bandung</Text>
        </View>
      </View>
      <WorkingExperience />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 13,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: 'row',
  },
  content: {
    marginHorizontal: 16,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 30,
  },
  textTitle: {
    fontSize: 18,
    color: Colors.black,
  },
  textMini: {
    fontSize: 10,
    marginBottom: 6,
  },
});

export default Profile;
