// In App.js in a new project

import React, { useContext, useEffect } from 'react';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Home from '../screens/Home';

// context 
import { TWContext } from '../providers/contexts/TWProvider'

const Stack = createNativeStackNavigator()

function DefaultNavigator() {

  const {colorScheme, toggleColorScheme} = useContext(TWContext);

  // useEffect(() => {
  //   alert(colorScheme)
  // }, [colorScheme])

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DefaultNavigator
