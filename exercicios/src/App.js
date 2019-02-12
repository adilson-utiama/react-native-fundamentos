import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Simples from './components/Simples'

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
          <Simples texto="Componente baseado em Função" />
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
