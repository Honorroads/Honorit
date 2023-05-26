import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CouponCard = ({ title, description, code, image, onPress, isSelected }) => {
  const cardBackgroundColor = isSelected ? '#434343' : '#434343';
  const textColor = isSelected ? 'white' : 'white';

  return (
    <TouchableOpacity style={[styles.cardContainer, { backgroundColor: cardBackgroundColor }]} onPress={onPress}>
      <View style={styles.leftContainer}>
        {image}
        <View style={styles.detailsContainer}>
          <Text style={[styles.title, { color: textColor }]}>{title}</Text>
          <Text style={[styles.description, { color: textColor }]}>{description}</Text>
          <Text style={[styles.code, { color: textColor }]}>{code}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.tagContainer}>
          <Icon name="tag" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const GridView = () => {
  const [selectedCouponId, setSelectedCouponId] = useState(null);

  const coupons = [
    {
      id: '1',
      title: 'Coupon 1',
      description: 'Description of coupon 1',
      code: 'CODE1',
      icon: <Icon name="pricetag" size={32} color="black" />,
    },
    {
      id: '2',
      title: 'Coupon 2',
      description: 'Description of coupon 2',
      code: 'CODE2',
      icon: <Icon name="pricetag" size={32} color="black" />,
    },
    {
      id: '3',
      title: 'Coupon 3',
      description: 'Description of coupon 3',
      code: 'CODE3',
      icon: <Icon name="pricetag" size={32} color="black" />,
    },
    {
      id: '4',
      title: 'Coupon 4',
      description: 'Description of coupon 4',
      code: 'CODE4',
      icon: <Icon name="pricetag" size={32} color="black" />,
    },
  ];

  const handleCouponPress = (couponId) => {
    setSelectedCouponId(couponId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coupon Cards</Text>
      <Text style={styles.description}>Select a coupon card below:</Text>

      <View style={styles.cardsContainer}>
        <FlatList
          data={coupons}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CouponCard
              title={item.title}
              description={item.description}
              code={item.code}
              image={item.icon}
              onPress={() => handleCouponPress(item.id)}
              isSelected={selectedCouponId === item.id}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    borderWidth: 0,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '48%',
    backgroundColor: '#434343',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    marginRight: 12,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 12,
    color: 'white',
    marginBottom: 2,
  },
  code: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  tagContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 5,
  },
});

export default GridView;
