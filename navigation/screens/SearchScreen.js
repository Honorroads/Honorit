import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SearchScreen() {
  const [amount, setAmount] = useState('0');

  const handleAmountChange = (text) => {
    // Remove any non-digit characters
    const cleanedText = text.replace(/[^0-9]/g, '');
    // Limit the input to 6 digits
    const limitedText = cleanedText.slice(0, 6);
    setAmount(limitedText);
  };

  const handleKeyPress = (key) => {
    let newAmount = amount;

    if (key === 'backspace') {
      if (newAmount.length > 1) {
        newAmount = newAmount.slice(0, -1);
      } else {
        newAmount = '0';
      }
    } else if (key === 'dot') {
      if (!newAmount.includes('.')) {
        newAmount += '.';
      }
    } else {
      if (newAmount === '0') {
        newAmount = key;
      } else {
        newAmount += key;
      }
    }

    setAmount(newAmount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.currencyContainer}>
          <Text style={styles.currencyText}>$</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="0.00"
            value={amount}
            onChangeText={handleAmountChange}
          />
        </View>
        <TouchableOpacity style={styles.currencyContainer} onPress={() => console.log('USD button clicked')}>
          <Text style={styles.currencyButtonText}>USD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numericKeyboard}>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('1')}>
          <Text style={styles.keyboardButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('2')}>
          <Text style={styles.keyboardButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('3')}>
          <Text style={styles.keyboardButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('4')}>
          <Text style={styles.keyboardButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('5')}>
          <Text style={styles.keyboardButtonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('6')}>
          <Text style={styles.keyboardButtonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('7')}>
          <Text style={styles.keyboardButtonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('8')}>
          <Text style={styles.keyboardButtonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('9')}>
          <Text style={styles.keyboardButtonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('dot')}>
          <Text style={styles.keyboardButtonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('0')}>
          <Text style={styles.keyboardButtonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => handleKeyPress('backspace')}>
          <Text style={styles.keyboardButtonText}>&larr;</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Request</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    paddingHorizontal: 10,
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyButton: {
    backgroundColor: 'gray',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  currencyButtonText: {
    color: 'white',
    fontSize: 24,
  },
  currencyText: {
    fontSize: 80,
    marginRight: 5,
    color: 'white',
  },
  input: {
    fontSize: 80,
    paddingVertical: 8,
    borderWidth: 0, // Remove the border
    textAlign: 'center',
    color: 'white',
  },
  numericKeyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  keyboardButton: {
    width: '30%',
    height: 60,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 10, // Add horizontal padding
  },
  bottomButton: {
    flex: 1, // Add flex: 1 to make buttons expand equally
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'gray',
    borderRadius: 25,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtonText: {
    fontSize: 24,
    color: 'white',
  },
});
