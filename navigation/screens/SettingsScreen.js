import React, { useState, useRef } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Keyboard, Animated, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ProfileIcon from './ProfileIcon';
import CouponCard from './CouponCard';
import LargeCards from './LargeCards';
import CarouselCards from './CarouselCards';




const data = [
  { id: '1', name: 'John Doe', type: 'Person' },
  { id: '2', name: 'Jane Smith', type: 'Person' },
  { id: '3', name: 'Acme Corporation', type: 'Business' },
  { id: '4', name: 'XYZ Corp', type: 'Business' },
];

const coupons = [
  {
    id: '1',
    title: 'Get 20% off',
    description: 'Use this coupon code to get 20% off on your next purchase.',
    code: 'SAVE20',
    icon: <Ionicons name="pricetag" size={32} color="black" />,
  },
  {
    id: '2',
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders with this coupon.',
    code: 'SHIPFREE',
    icon: <Ionicons name="pricetag" size={32} color="black" />,
  },
  // Add more coupons as needed
];

const SettingsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter the data based on the search query
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const handleFocus = () => {
    Keyboard.dismiss();
  };

  const startAnimation = () => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const stopAnimation = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log('Card pressed')}>
      <CouponCard
        title={item.title}
        description={item.description}
        code={item.code}
        image={item.icon}
      />
      <LargeCards />
      <CarouselCards/>
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
          onFocus={handleFocus}
          autoFocus
        />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Animated.View style={[styles.sliderContainer, { transform: [{ translateY: slideAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -100],
          }) }] }]}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.sliderItem}>
                <ProfileIcon name={item.name} />
                <Text style={styles.sliderItemText}>{item.name}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Animated.View>
        <FlatList
          data={coupons}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.listContainer}
          onScrollBeginDrag={startAnimation}
          onScrollEndDrag={stopAnimation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  contentContainer: {
    flexGrow: 1,
  },
  sliderContainer: {
    height: 100,
    marginBottom: 20,
  },
  sliderItem: {
    alignItems: 'center',
    marginRight: 10,
  },
  sliderItemText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    color: 'white',
  },
  listContainer: {
    flex: 1,
  },
});

export default SettingsScreen;
