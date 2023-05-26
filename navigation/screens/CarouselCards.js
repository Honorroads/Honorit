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
          <Text style={[styles.titleText, { color: textColor }]}>{title}</Text>
          <Text style={[styles.descriptionText, { color: textColor }]}>{description}</Text>
          <Text style={[styles.codeText, { color: textColor }]}>{code}</Text>
        </View>
      </View>
      <View style={styles.tagContainer}>
        <Icon name="tag" size={24} color="black" />
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

  const renderCouponCard = ({ item }) => (
    <CouponCard
      title={item.title}
      description={item.description}
      code={item.code}
      image={item.icon}
      onPress={() => handleCouponPress(item.id)}
      isSelected={selectedCouponId === item.id}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Exclusive offers with Honorit</Text>
      <Text style={styles.descriptionText}>Shop online and save at checkout.</Text>

      <FlatList
        data={coupons}
        renderItem={renderCouponCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardsContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  cardContainer: {
    backgroundColor: '#434343',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    marginRight: 7,
    width: 250,
    height: 250
  },
  leftContainer: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
  },
  descriptionText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 2,
  },
  codeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  tagContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 5,
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default GridView;
