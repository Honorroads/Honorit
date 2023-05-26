import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TransactionGrid = () => {
  const receivedTransactions = [
    { id: '1', name: 'John Doe', amount: 50, date: '2023-05-25' },
    { id: '2', name: 'Jane Smith', amount: 20, date: '2023-05-24' },
    // Add more received transactions as needed
  ];

  const sentTransactions = [
    { id: '1', name: 'Acme Corporation', amount: 100, date: '2023-05-23' },
    { id: '2', name: 'XYZ Corp', amount: 30, date: '2023-05-22' },
    // Add more sent transactions as needed
  ];

  const handleTransactionPress = (transaction) => {
    // Handle transaction press here
    console.log('Transaction pressed:', transaction);
  };

  const renderTransactionItem = (transaction) => {
    const { id, name, amount, date } = transaction;

    return (
      <TouchableOpacity
        key={id}
        style={styles.transactionItem}
        onPress={() => handleTransactionPress(transaction)}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="person-circle" size={32} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <TouchableOpacity style={styles.loveIconContainer}>
            <Ionicons name="heart" size={16} color="green" />
          </TouchableOpacity>
          <Text style={styles.amountText}>{`$${amount}`}</Text>
        </View>
        <View style={styles.notificationContainer}>
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationCount}>1</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Received</Text>
        {receivedTransactions.map(renderTransactionItem)}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sent</Text>
        {sentTransactions.map(renderTransactionItem)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  dateText: {
    fontSize: 12,
    color: 'white',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    borderWidth: 2,
    borderColor: 'green',
    padding: 4,
    borderRadius: 15,
  },
  loveIconContainer: {
    marginRight: 4,
  },
  amountText: {
    fontSize: 14,
    color: 'white',
  },
  notificationContainer: {
    marginLeft: 12,
  },
  notificationBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  notificationCount: {
    color: 'white',
    fontSize: 12,
  },
});

export default TransactionGrid;
