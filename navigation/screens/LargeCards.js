import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LargeCard = () => {
  const handleCardPress = () => {
    // Handle the card click action here
    console.log('LargeCard clicked');
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <Text style={styles.description}>INVITE FRIENDS</Text>
        <Text style={styles.title}>
          Get $15 for every friend who signs up
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    height: 450
    
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LargeCard;
