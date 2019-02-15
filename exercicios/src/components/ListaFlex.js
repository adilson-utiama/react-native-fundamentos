import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'Joao', nota: 9.7 },
    { id: 2, nome: 'Ana', nota: 9.1 },
    { id: 3, noem: 'Bia', nota: 5.4 },
    { id: 4, nome: 'Claudia', nota: 7.6 },
    { id: 5, nome: 'Roberto', nota: 6.8 },
    { id: 6, nome: 'Guilherme', nota: 10.0 },
    { id: 7, nome: 'Rafael', nota: 8.8 },
    { id: 8, nome: 'Rebeca', nota: 8.8 },
    { id: 9, nome: 'Tobias', nota: 7.5 },
    { id: 10, nome: 'Wilson', nota: 10.0},
    { id: 11, nome: 'Joao', nota: 9.7 },
    { id: 12, nome: 'Ana', nota: 9.1 },
    { id: 13, noem: 'Bia', nota: 5.4 },
    { id: 14, nome: 'Claudia', nota: 7.6 },
    { id: 15, nome: 'Roberto', nota: 6.8 },
    { id: 16, nome: 'Guilherme', nota: 10.0 },
    { id: 17, nome: 'Rafael', nota: 8.8 },
    { id: 18, nome: 'Rebeca', nota: 8.8 },
    { id: 19, nome: 'Tobias', nota: 7.5 }
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //FLEX propriedades
    //Direcao do Flex no item -> cross-start-end='row' : main-start-end='column'
    flexDirection: 'row', // inverte direcao = -> cross-start-end='column' : main-start-end='row'
    alignItems: 'center',
    justifyContent: 'space-between'
    //alignItems -> flex-start, flex-end entre outros
    //justifyContent -> space-around, flex-start, flex-end entre outros

}

export const Aluno = props => (
    <View style={ itemEstilo }>
        <Text>Nome: { props.nome }</Text>
        <Text style={ { fontWeight: 'bold' } }>Nota: { props.nota }</Text> 
    </View>
)

export default props => {
    {/* Destructurings in item */}
    const renderItem = ( { item } ) => {
        {/* Spread operator */}
        return <Aluno { ...item  } />
    }

    return (
        <ScrollView>
            <FlatList data={ alunos } renderItem={ renderItem }
                keyExtractor={ ( _, index ) => index.toString() } />
        </ScrollView>
    )
}