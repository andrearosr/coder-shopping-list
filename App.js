import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Modal from './components/Modal';
import List from './components/List';
import AddItem from "./components/AddItem";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <AddItem />
        <List />
        <Modal />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    backgroundColor: '#F0F0F0',
    flex: 1,
  },
});