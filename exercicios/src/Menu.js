import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParOuImpar from './components/ParOuImpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'

export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={ 6 }/>,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="React Native!"/>
    },
    ParOuImpar: {
        screen: () => <ParOuImpar numero={ 30 } />,
        navigationOptions: { title: 'Par ou Impar' }
    },
    Simples: {
        screen: () => <Simples texto="Componente Simples"/>
    }
})