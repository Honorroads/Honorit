import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CashCard = ({ cardNumber, expirationDate, cardHolderName, balance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardNumber}>{cardNumber}</Text>
      <View style={styles.cardDetailsContainer}>
        <Text style={styles.label}>Card Holder</Text>
        <Text style={styles.cardHolder}>{cardHolderName}</Text>
        <Text style={styles.label}>Expiration Date</Text>
        <Text style={styles.expirationDate}>{expirationDate}</Text>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.balance}>{balance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECECEC',
    borderRadius: 25,
    padding: 20,
    width: '100%',
  },
  cardNumber: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    marginTop: 20,
  },
  label: {
    color: 'black',
    fontSize: 12,
    marginBottom: 5,
  },
  cardHolder: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  expirationDate: {
    color: 'gray',
    fontSize: 14,
  },
  balance: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default CashCard;
