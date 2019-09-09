import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ?
    'http://localhost:3000' : 'http://192.168.1.130:3000'


function showError(err) {
    Alert.alert('Opss! Ocorreu um erro', `Mensagem: ${err}`)
}

export { server, showError }