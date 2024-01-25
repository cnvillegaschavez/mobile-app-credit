/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import Home from './src/screens/home/Home';
import MainNavigator from './src/navigations/MainNavigator';

function App(): React.JSX.Element {
  
  return (
    <GluestackUIProvider config={config}>
      <MainNavigator/>
    </GluestackUIProvider>
  );
}
export default App;
