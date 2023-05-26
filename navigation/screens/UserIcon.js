import React from 'react';
import { View, FlatList, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ProfileIcon from './ProfileIcon';

const UserIconSlider = () => {
  const users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Acme Corporation' },
    { id: '4', name: 'XYZ Corp' },
    // Add more user icons as needed
  ];

  const handleIconPress = (userId) => {
    // Handle icon press here based on the user's ID
    console.log('Icon pressed:', userId);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={() => handleIconPress('add')}>
        <View style={styles.userIconContainer}>
          <View style={styles.userIcon}>
            <Ionicons name="add-circle-outline" size={32} color="green" />
          </View>
          <Text style={styles.userIconText}>Get $15</Text>
        </View>
      </TouchableOpacity>
      {users.map((user) => (
        <TouchableOpacity key={user.id} onPress={() => handleIconPress(user.id)}>
          <View style={styles.userIconContainer}>
            <ProfileIcon name={user.name} />
            <Text style={styles.userIconText}>{user.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userIconContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  userIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIconText: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    color: 'white'
  },
});

export default UserIconSlider;
