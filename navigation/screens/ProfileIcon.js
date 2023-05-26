import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileIcon = ({ name }) => {
  return (
    <View style={styles.iconContainer}>
      <Text style={styles.iconText}>{name.charAt(0)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'lightgray',
    width: 70,
    height: 70,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  iconText: {
    fontSize: 20,
    color: 'gray',
  },
});

export default ProfileIcon;
