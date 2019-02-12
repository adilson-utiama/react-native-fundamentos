import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.f40 }>Modificando o Componente App (Baseado em Classe)!</Text>
      </View>
    ) 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  f40: {
    fontSize: 40
  }
  
});
