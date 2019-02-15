import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParOuImpar from './components/ParOuImpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataforma from './components/Plataforma'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import { Avo } from './components/ComunicacaoDireta'
import { TextoSincronizado } from './components/ComunicacaoIndireta' 
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: "Lista ( Flex Box )" }
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: "Comunicacao via callback" }
    },
    Avo: {
        screen: () =>  <Avo nome="Joao" sobrenome="Silva" />,
        navigationOptions: { title: "Comunicação Direta via Props" }
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={19} />
    },
    Plataforma: {
        screen: () => <Plataforma />
    },
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