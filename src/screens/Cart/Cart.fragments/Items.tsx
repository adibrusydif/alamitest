import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Content from './Content';
import {Colors, Fonts, toCurrency} from '../../../utils';
import Counter from './Counter';
import {ContentInterface} from '../cart.interface';

const Item = (props: ContentInterface) => {
  const {data} = props;
  return (
    <View style={styles.container}>
      <Content data={data} />
      <View style={styles.row}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.wishlistText}>{toCurrency(data?.price)}</Text>
        </TouchableOpacity>
        <Counter />
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wishlistText: {
    fontFamily: Fonts.INTER_BOLD,
    color: Colors.blueDark,
    fontSize: 14,
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: Colors.gray100,
    marginVertical: 16,
  },
});
