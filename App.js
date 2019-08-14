import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import store from './app/store/index';


import Listing from './app/components/Listings/Listing.component'
import Top from './app/components/Top/Top.component';

import colors from './assets/styles/colors';

import * as Font from 'expo-font';

export default function App() {

  const [hasFont, setFont] = useState(false)

  loadFont = async () => {

    await Font.loadAsync({
      'avenir': require('./assets/fonts/Avenir-Roman.ttf'),
    })

    setFont(true)

  }

  useEffect(() => {
    loadFont()
  }, [])

  if (hasFont) {
    return (

      <Provider store={store}>

        <StatusBar barStyle="light-content" />

        <SafeAreaView style={{ backgroundColor: colors.blue, }}>

          <Top />
          <Listing />

        </SafeAreaView>

      </Provider >


    );
  }

  return null

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
