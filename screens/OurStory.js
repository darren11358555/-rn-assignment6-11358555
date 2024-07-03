// OurStory.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OurStory = ({ title, titleStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20
  },
});

export default OurStory;
