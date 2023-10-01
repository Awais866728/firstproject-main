import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Productinfo = ({ imageUri, name, price, category }) => {
  return (
   
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Price: ${price.toFixed(2)}</Text>
        <Text style={styles.category}>Category: {category}</Text>
      </View>
    </View>

   
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Display columns side by side
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  imageContainer: {
    flex: 1, // Occupy 1/2 of the container width
    padding: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1, // Occupy 1/2 of the container width
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
  category: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Productinfo;
