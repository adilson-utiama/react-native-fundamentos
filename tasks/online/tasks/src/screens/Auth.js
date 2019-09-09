import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/login.jpg'

export default class Auth extends Component {
    state = {
        stageNew: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            Alert.alert('Sucesso', 'Criar Conta')
        } else {
            Alert.alert('Sucesso', 'Login')
        }
    }

    render() {
        return(
            <ImageBackground source={ backgroundImage } style={ styles.background }>
                <Text style={ styles.title }>Tasks</Text>
                <View style={ style.formContainer }>
                    <Text style={ style.subtitle }>
                        { this.state.stageNew ? 'Criar uma Conta' : 'Informe seus dados' }
                    </Text>
                    { this.state.stageNew &&
                        <TextInput placeholder='Nome' style={ styles.input } 
                            value={ this.state.name }
                            onChangeText={ name => this.setState({ name }) }/> }
                    <TextInput placeholder='E-mail' style={ styles.input }
                        value={ this.state.email }
                        onChangeText={ email => this.setState({ email }) } />
                    <TextInput placeholder='Password' style={ styles.input }
                        value={ this.state.password }
                        onChangeText={ password => this.setState({ password }) }/>
                    { this.state.stageNew &&
                        <TextInput placeholder='Confirmação' style={ styles.input }
                            value={ this.state.confirmPassword }
                            onChangeText={ confirmPassword => this.setState({ confirmPassword }) }/> }
                    <TouchableOpacity onPress={ this.signinOrSignup }>
                        <View style={ styles.button }>
                            <Text style={ styles.buttonText }>
                                { this.state.stageNew ? 'Registrar' : 'Logar' }    
                            </Text>    
                        </View> 
                    </TouchableOpacity>
                </View> 
                <TouchableOpacity style={{ padding: 10 }}
                        onPress={ () => this.setState({
                            stageNew: !this.state.stageNew
                        }) }>
                        <Text style={ styles.buttonText }>
                            { this.state.stageNew ? 'ja possui conta'
                                : 'Ainda não possui conta?' }
                        </Text>
                    </TouchableOpacity>
            </ImageBackground>
        )
    }

}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 70,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
    }
})