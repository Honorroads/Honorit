import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MultiButtonCard = () => {
  const handleCardPress = () => {
    // Add your desired logic when the card is pressed
    console.log('Card Pressed');
  };

  const handleButtonPress = (buttonTitle) => {
    // Add your desired logic based on the button title
    console.log(`Button "${buttonTitle}" Pressed`);
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <Icon name="plus-circle" size={24} color="black" style={styles.icon} />
          <Text style={styles.title}>Add Card To Apple Pay</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleButtonPress('Add Card')}
          style={styles.iconContainer}
        >
          <Icon name="angle-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <Icon name="arrow-up" size={24} color="black" style={styles.icon} />
          <Text style={styles.title}>Round Ups</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleButtonPress('Round Ups')}
          style={styles.iconContainer}
        >
          <Icon name="angle-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <Icon name="lock" size={24} color="black" style={styles.icon} />
          <Text style={styles.title}>Lock Card</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleButtonPress('Lock Card')}
          style={styles.iconContainer}
        >
          <Icon name="angle-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <Icon name="credit-card" size={24} color="black" style={styles.icon} />
          <Text style={styles.title}>Find an ATM</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleButtonPress('Find an ATM')}
          style={styles.iconContainer}
        >
          <Icon name="angle-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <Icon name="key" size={24} color="black" style={styles.icon} />
          <Text style={styles.title}>Change PIN</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleButtonPress('Change PIN')}
          style={styles.iconContainer}
        >
          <Icon name="angle-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <Icon name="question-circle" size={24} color="black" style={styles.icon} />
          <Text style={styles.title}>Cash Card Support</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleButtonPress('Cash Card Support')}
          style={styles.iconContainer}
        >
          <Icon name="angle-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECECEC',
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {},
});

export default MultiButtonCard;
