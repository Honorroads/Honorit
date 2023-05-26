import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Disclosure = () => {
  const handleDisclosurePress = () => {
    // Handle disclosure button press
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Banking service provided by Honorit's bank partner(s). Debit cards issued by Sutton Bank.
        Brokerage services by Honor Road LLC, member FINRA, subsidiary of block, Inc.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleDisclosurePress}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white'

  },
  button: {
    width: 30,
    alignItems: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: 2,
  },
});

export default Disclosure;
