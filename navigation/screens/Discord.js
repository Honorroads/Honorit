import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DiscountCard = () => {
  const handleCardPress = () => {
    // Add your desired logic when the card is pressed
    console.log('Card Pressed');
  };

  const handleButtonPress = () => {
    // Add your desired logic when the button is pressed
    console.log('Button Pressed');
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon name="ellipsis-h" size={24} color="black" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Discord</Text>
          <Text style={styles.description}>99% off one in-app order</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>SWAP</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  rightContainer: {},
  button: {
    backgroundColor: 'gray',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DiscountCard;
