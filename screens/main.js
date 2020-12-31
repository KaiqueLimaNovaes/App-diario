import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Espiral from '../assets/espiral2.png';
//import '../functions/date.js';

var data = new Date();

var day = data.getDate();

var monthGet = data.getMonth() + 1;
var month

if(monthGet == 1){
    var month = "Janeiro";
}else if(monthGet == 2){
    var month = "Fevereiro";
}else if(monthGet == 3){
    var month = "Março";
}else if(monthGet == 4){
    var month = "Abril";
}else if(monthGet == 5){
    var month = "Maio";
}else if(monthGet == 6){
    var month = "Junho";
}else if(monthGet == 7){
    var month = "Julho";
}else if(monthGet == 8){
    var month = "Agosto";
}else if(monthGet == 9){
    var month = "Setembro";
}else if(monthGet == 10){
    var month = "Outubro";
}else if(monthGet == 11){
    var month = "Novembro";
}else if(monthGet == 12){
    var month = "Dezembro";
}

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
            <View style={{width: '80%', flexDirection: 'column'}}>
              <View style={{height: 50, width: '100%', flexDirection: 'row'}}>
                <View style={{width: '70%', backgroundColor: 'white', borderWidth: 1, borderColor: 'black', alignItems: 'center'}}>
                  <TextInput 
                    style={{height: '100%', width: '100%', padding:10, fontSize: 28}}
                  />
                </View>
                <View style={{width: '30%', backgroundColor: 'white', borderWidth: 1, borderColor: 'black', alignItems: 'center'}}>
                  <Text style={{fontSize: 23}}>{day}</Text>
                  <Text style={{fontSize: 15}}>{month}</Text>
                </View>
              </View>
              <TextInput 
                  style={{height: 550, width: '100%', borderWidth: 1, borderColor: 'black', backgroundColor: 'white', textAlignVertical: 'top', padding:10}}
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