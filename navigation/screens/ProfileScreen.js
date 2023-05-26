import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = ({ navigation }) => {
  // Placeholder data for demonstration purposes
  const user = {
    name: 'John Doe',
    bio: 'Passionate about coding and technology',
    email: 'johndoe@example.com',
    hasProfilePicture: false, // Set to true when the user has a profile picture
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="gray" />
        </TouchableOpacity>
        {/* Place your profile menu here */}
        {user.hasProfilePicture ? (
          <Image source={profilePicture} style={{ width: 30, height: 30, borderRadius: 15 }} />
        ) : (
          <Icon name="user-circle" size={30} color="gray" />
        )}
      </View>

      {/* Content */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {user.hasProfilePicture ? (
          <Image source={profilePicture} style={{ width: 100, height: 100, borderRadius: 50 }} />
        ) : (
          <Icon name="user-circle" size={100} color="gray" />
        )}
        <Text style={{ marginTop: 10, fontSize: 20 }}>{user.name}</Text>
        <Text style={{ marginTop: 5, fontSize: 16, color: 'gray' }}>{user.bio}</Text>
        <Text style={{ marginTop: 20 }}>Contact Information:</Text>
        <Text>{user.email}</Text>
        {/* Add more details as needed */}

        <TouchableOpacity onPress={handleLogout} style={{ marginTop: 20 }}>
          <Text style={{ color: 'blue' }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
