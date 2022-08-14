/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ItemCart from './Items';
import {DATA_CART} from '../cart.datasource';
import {dataCart} from '../cart.interface';
import {Button, Separator} from '../../../components';

const ListCart = () => {
  const renderItem = ({item}: {item: dataCart}) => {
    return <ItemCart data={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA_CART}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Button text={'Checkout'} />
    </View>
  );
};

export default ListCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 16,
  },
});
