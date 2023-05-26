import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CashCard from './CashCard';
import CardShipped from './CardShipped';
import Discord from './Discord';
import MultiButtonCard from './MultiButtonCard';

export default function DetailsScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container} style={{backgroundColor: 'black'}}>
      {/* Add more content here */}
      <CashCard />
      <CardShipped />
      <Discord />
      <MultiButtonCard />
    </ScrollView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
