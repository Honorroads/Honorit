import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MowaysAddMoney = ({ navigation }) => {
  const handleButtonPress = (title) => {
    navigation.navigate('HomeScreen', { method: title });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>More ways to add money</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Direct deposit')}
        >
          <Text style={styles.buttonTitle}>Direct deposit</Text>
          <Text style={styles.buttonDescription}>Add funds through direct deposit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Bank Transfers')}
        >
          <Text style={styles.buttonTitle}>Bank Transfers</Text>
          <Text style={styles.buttonDescription}>Transfer money from your bank account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Recurring Deposit')}
        >
          <Text style={styles.buttonTitle}>Recurring Deposit</Text>
          <Text style={styles.buttonDescription}>Set up automatic recurring deposits</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  buttonContainer: {
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  buttonDescription: {
    fontSize: 14,
    color: 'white',
  },
});

export default MowaysAddMoney;
