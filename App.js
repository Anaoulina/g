import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
   
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App); 