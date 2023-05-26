import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TitleCard = () => {
  const handleCardPress = () => {
    // Add your desired logic when the card is pressed
    console.log('Card Pressed');
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon name="envelope" size={24} color="black" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Shipped</Text>
          <Text style={styles.description}>7 days</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.activate}>Activate</Text>
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
  activate: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default TitleCard;
