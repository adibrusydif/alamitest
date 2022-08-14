import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListCart from './Cart.fragments/ListCard';

const Cart = () => {
  return (
    <View style={styles.container}>
      <ListCart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Cart;
