import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Espiral from '../assets/espiral2.png'

export default function Main() {
    return (
      <View style={styles.main}>
        <View style={{flexDirection: 'row'}}>
            <Text>kaique</Text>
        </View>
        
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
                style={{height: 600, width: 40, zIndex: 2}}
                source={Espiral}
            />
            <TextInput 
                style={{height: 600, width: '85%', borderWidth: 1, borderColor: 'black', backgroundColor: 'white'}}
                multiline
            />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    main: {
      //backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });