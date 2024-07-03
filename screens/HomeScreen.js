// HomeScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OurStory from './OurStory';

const products = [
  { id: '1', name: 'Office Wear', price: 120, image: require('../assets/dress1.png') },
  { id: '2', name: 'Black', price: 120, image: require('../assets/dress2.png') },
  { id: '3', name: 'Church Wear', price: 120, image: require('../assets/dress3.png') },
  { id: '4', name: 'Lamerel', price: 120, image: require('../assets/dress4.png') },
  { id: '5', name: '21WN', price: 120, image: require('../assets/dress5.png') },
  { id: '6', name: 'Lopo', price: 120, image: require('../assets/dress6.png') },
  { id: '7', name: '21WN', price: 120, image: require('../assets/dress7.png') },
  { id: '8', name: 'Iame', price: 120, image: require('../assets/dress3.png') },
];

const HomeScreen = ({ navigation }) => {
  const addToCart = async (product) => {
    try {
      let cart = await AsyncStorage.getItem('cart');
      cart = cart ? JSON.parse(cart) : [];
      const index = cart.findIndex(item => item.id === product.id);
      if (index > -1) {
        cart[index].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Image source={require('../assets/Menu.png')} style={styles.icon} />
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <View style={styles.headerIcons}>
          <Image source={require('../assets/Search.png')} style={[styles.icon, styles.searchIcon]} />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../assets/shoppingBag.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.storyHeader}>
        <OurStory title="OUR STORY" titleStyle={{ fontSize: 20, color: '#e91e63' }} />
        <View style={styles.headerRight}>
          <View style={styles.circleButton}>
            <Image source={require('../assets/Listview.png')} style={styles.icon} />
          </View>
          <View style={styles.circleButton}>
            <Image source={require('../assets/Filter.png')} style={styles.icon} />
          </View>
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>reversible angora cardigan</Text>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
              <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 20,
  },
  storyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ececec',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  product: {
    flex: 1,
    margin: 10,
    alignItems: 'flex-start',
    position: 'relative',
  },
  image: {
    width: 150,
    height: 200,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 14,
    color: '#888',
    alignSelf: 'flex-start',
  },
  price: {
    fontSize: 16,
    color: '#e91e63',
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
