import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Espiral from '../assets/espiral2.png'

export default function Main() {
    return (
      <View style={styles.main}>
        <View style={{flexDirection: 'row'}}>
            <Text>Bom dia</Text>
        </View>
        
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
                style={{height: 600, width: 40, zIndex: 2}}
                source={Espiral}
            />
            <View style={{width: '80%'}}>
              <TextInput 
                  style={{height: 600, width: '100%', borderWidth: 1, borderColor: 'black', backgroundColor: 'white', textAlignVertical: 'top', padding:10}}
                  multiline
              />
            </View>
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