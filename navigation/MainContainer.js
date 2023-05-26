import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


/* Screens */
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationsScreen from './screens/NotificationsScreen';

/* Screen Names */
const homeName = 'Money';
const detailsName = 'Cash Wallet';
const searchName = 'Search';
const settingsName = 'Discover';
const notificationsName = 'Activity';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  const [selectedTab, setSelectedTab] = useState(homeName);

  const handleProfilePress = () => {
    // Handle profile menu click event here
    // For example, you can navigate to the profile screen
    // using the navigation prop.
  };

  const CustomHeader = ({ route }) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{route.name}</Text>
        <TouchableOpacity onPress={handleProfilePress}>
          {/* Render profile icon */}
          <View style={styles.iconContainer}>
            <Ionicons name="person" size={24} color="gray" />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Tab Navigation */}
      <Tab.Navigator
        screenOptions={{
          header: ({ route }) => <CustomHeader route={route} />,
          headerTitleAlign: 'left',
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'black', // Add this line to set the background color
          },
        }}
      >
      <Tab.Screen
  name={homeName}
  component={HomeScreen}
  options={{
    tabBarIcon: ({ focused, color, size }) => (
      <Icon
        name={focused ? 'home' : 'home-outline'}
        size={size}
        color={color}
      />
    ),
          }}
        />
        <Tab.Screen
  name={detailsName}
  component={DetailsScreen}
  options={{
    tabBarIcon: ({ focused, color, size }) => (
      <Ionicons
        name={focused ? 'card' : 'card-outline'}
        size={size}
        color={color}
      />
    ),
          }}
        />
        <Tab.Screen
          name={searchName}
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Text style={{ color, fontSize: size }}>
                {focused ? '💲' : '💲'}
              </Text>
            ),
          }}
        />
       <Tab.Screen
  name={settingsName}
  component={SettingsScreen}
  options={{
    tabBarIcon: ({ focused, color, size }) => (
      <Ionicons
        name={focused ? 'search' : 'search-outline'}
        size={size}
        color={color}
      />
    ),
          }}
        />
        <Tab.Screen
          name={notificationsName}
          component={NotificationsScreen}
          
          
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'black', // Add this line to set the background color
  },
  title: {
    marginRight: 10,
    fontSize: 25,
    color: 'white', // Add this line to set the text color
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 8,
  },
});
