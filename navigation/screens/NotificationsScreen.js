import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBox from './SearchBox';
import UserIcon from './UserIcon'
import TransactionAlert from './TransactionAlert'

export default function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SearchBox />
      <View style={styles.contentContainer}>
        <ScrollView>
          {/* Add your content here */}
          <UserIcon />
          <TransactionAlert />
        </ScrollView>
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
  contentContainer: {
    flex: 1,
    width: '100%',
    marginTop: 10,
  },
  

});
