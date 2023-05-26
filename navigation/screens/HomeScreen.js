import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated, ScrollView } from 'react-native';
import MoneyCard from './MoneyCard';
import CoupoCard from './CouponCard';
import MowaysaddMoney from './MowaysaddMoney';
import Disclosure from './Disclosure';

const HomeScreen = () => {
  const panY = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, { dy }) => {
        panY.setValue(dy);
      },
      onPanResponderRelease: (_, { dy }) => {
        if (dy > 50) {
          // User has swiped down
          Animated.timing(panY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          // User has not swiped down, reset the position
          Animated.spring(panY, {
            toValue: 0,
            bounciness: 10,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <ScrollView style={styles.scrollView}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                translateY: panY.interpolate({
                  inputRange: [-100, 0],
                  outputRange: [-100, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <View style={styles.content}>
          <MoneyCard />
          <CoupoCard />
          <MowaysaddMoney /> 
          <Disclosure /> 

          {/* Add more content components here */}
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // Add desired styles for the content inside the scrollable view
  },
});

export default HomeScreen;
