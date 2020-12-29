import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Main from './screens/main.js'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Main />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
