import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import paths from '../core/constants/paths';
import Home from '../screens/home/Home';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={paths.HOME}
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name={paths.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
