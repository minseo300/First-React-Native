import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from './BottomTabNavigation';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> My First React Native</Text>
      <BottomTab/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
  },
});

export default App;