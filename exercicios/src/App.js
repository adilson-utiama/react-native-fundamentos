import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Simples from './components/Simples'
import ParOuImpar from './components/ParOuImpar'
import { Inverter, MegaSena } from './components/Multi'

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
          <Simples texto="Componente baseado em Função" />
          <ParOuImpar numero={ 30 } /> 
          <Inverter texto="React Native!" />
          <MegaSena numeros={ 6 } />
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
  }

});
