import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {

    state = {
        numero: 0
    }

    incrementa = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    zerar = () => {
        this.setState({ numero: 0 })
    }

    render() {
        return (
            <View>
                <Text style={ { fontSize: 40 } }>{ this.state.numero }</Text>
                <TouchableHighlight
                    onPress={ this.incrementa }
                    onLongPress={ this.zerar }>
                    <Text style={ { fontSize: 20 } }>Incrementar / Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}