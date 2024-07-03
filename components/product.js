// components/Product.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Product = ({ product, addToCart }) => {
  return (
    <View style={styles.product}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  image: {
    width: 100,
    height: 100
  }
});

export default Product;
