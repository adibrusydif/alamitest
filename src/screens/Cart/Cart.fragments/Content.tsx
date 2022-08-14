import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Colors, Fonts} from '../../../utils';
import {ContentInterface} from '../cart.interface';

const ContentCart = (props: ContentInterface) => {
  const {data} = props;
  return (
    <View style={styles.productContainer}>
      <View style={styles.row}>
        <Image source={data?.image} style={styles.productImage} />
        <View style={styles.contentContainer}>
          <Text numberOfLines={1} style={styles.productText}>
            {data?.name}
          </Text>
          {/* <Gap height={4} /> */}
          <Text style={styles.price}>{data?.desc}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginRight: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 64,
    height: 48,
    borderRadius: 6,
  },
  contentContainer: {paddingHorizontal: 16},
  productText: {
    fontFamily: Fonts.INTER_BOLD,
    fontSize: 14,
    color: Colors.black,
    paddingRight: 32,
  },
  price: {
    fontFamily: Fonts.INTER_BLACK,
    color: Colors.black,
    fontSize: 12,
  },
});

export default ContentCart;
