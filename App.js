import React from 'react';
import {
  StyleSheet, Text, View, StatusBar,
  SafeAreaView
} from 'react-native';

import { Provider } from 'react-redux';
import store from './app/store/index';
import Listing from './app/components/Listings/Listing.component'
import Top from './app/components/Top/Top.component';

export default function App() {
  return (

    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Top />
        <Listing />
      </SafeAreaView>
    </Provider >


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
