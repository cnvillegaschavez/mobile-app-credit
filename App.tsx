/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import MainNavigator from './src/navigations/MainNavigator';
import {Provider} from 'react-redux';
import store from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <MainNavigator />
      </GluestackUIProvider>
    </Provider>
  );
}
export default App;
