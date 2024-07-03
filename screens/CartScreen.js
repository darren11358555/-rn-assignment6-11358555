import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        let cartItems = await AsyncStorage.getItem('cart');
        setCart(cartItems ? JSON.parse(cartItems) : []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCart();
  }, []);

  const removeFromCart = async (productId) => {
    try {
      let cartItems = await AsyncStorage.getItem('cart');
      cartItems = cartItems ? JSON.parse(cartItems) : [];
      const index = cartItems.findIndex(item => item.id === productId);
      if (index > -1) {
        if (cartItems[index].quantity > 1) {
          cartItems[index].quantity -= 1;
        } else {
          cartItems.splice(index, 1);
        }
      }
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      setCart(cartItems);
    } catch (error) {
      console.error(error);
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerLeft}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.logoContainer}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <Image source={require('../assets/Search.png')} style={styles.icon} />
      </View>
      <Text style={styles.title}>CHECKOUT</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.productDetails}>
              <Text style={styles.name}>{item.name} (x{item.quantity})</Text>
              <Text style={styles.price}>${item.price * item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
              <Image source={require('../assets/remove.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>EST. TOTAL</Text>
        <Text style={styles.totalPrice}>${totalPrice}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutButton}>
          <Image source={require('../assets/shoppingBag.png')} style={[styles.checkoutIcon, { tintColor: '#ffffff' }]} />
          <Text style={styles.checkoutText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,  
    paddingHorizontal: 20,
    backgroundColor: '#ffffff', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    width: 24, 
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center', 
  },
  logo: {
    width: 100, 
    height: 40, 
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginVertical: 20,
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#e91e63',
    marginVertical: 5,
  },
  removeButton: {
    marginLeft: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  totalText: {
    fontSize: 16,
    color: '#000000',
  },
  totalPrice: {
    fontSize: 20,
    color: '#e91e63',
  },
  footer: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkoutIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#ffffff',
  },
  checkoutText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default CartScreen;