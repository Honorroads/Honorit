import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const MoneyCard = () => {
  const balance = 1000; // Replace with your actual balance value

  const handleAddCash = () => {
    // Handle Add Cash button click event
    console.log('Add Cash clicked');
  };

  const handleCashOut = () => {
    // Handle Cash Out button click event
    console.log('Cash Out clicked');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.cardTitle}>Cash Balance </Text>
          <Text style={styles.clickableText}>Account & Routing</Text>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={[styles.balanceAmount, styles.whiteText]}>$ {balance}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAddCash}>
            <Text style={styles.buttonText}>Add Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCashOut}>
            <Text style={styles.buttonText}>Cash Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    paddingTop: 16,
  },
  card: {
    width: 350,
    height: 180,
    backgroundColor: '#333333',
    borderRadius: 8,
    padding: 16,
    elevation: 3,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  clickableText: {
    fontSize: 12,
    color: 'gray',
    textDecorationLine: 'underline',
    color: 'white',
  },
  balanceContainer: {
    marginTop: 1,
  },
  balanceAmount: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  whiteText: {
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 29,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MoneyCard;
