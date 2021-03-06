/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {store, persistor} from './store';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import ItemList from './ItemList';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './DetailScreen';
import {getLogin} from './action';
import { connect } from 'react-redux';


import InitialView from './InitialView';
import { persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const App: () => React$Node = () => {
  // this.props.getLogin();
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <NavigationContainer> */}
    {/* <Stack.Navigator> */}
  
{/* <ItemList></ItemList> */}
          {/* <Stack.Screen name="ItemScreen" component={ItemList} /> */}
          {/* <Stack.Screen name= "DetailScreen" component={DetailScreen}></Stack.Screen> */}
   
    {/* </Stack.Navigator> */}
    {/* </NavigationContainer> */}
    <InitialView></InitialView>
    </PersistGate>
    </Provider>
 
 
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
