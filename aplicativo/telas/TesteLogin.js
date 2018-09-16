import React, { Component } from 'react'
import {
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native'
import firebase from 'firebase'
import Login from './Login';

export default class TesteLogin extends Component {
    state = {
        email: '',
        password: ''
    }

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyAhLVNbLBhSFpSFxoz4X3nyorsjzHSX3jo",
            authDomain: "configuracaofirebasereac-a3745.firebaseapp.com",
            databaseURL: "https://configuracaofirebasereac-a3745.firebaseio.com",
            projectId: "configuracaofirebasereac-a3745",
            storageBucket: "configuracaofirebasereac-a3745.appspot.com",
            messagingSenderId: "727692000489"
        };
        firebase.initializeApp(config);
    }

    login = async () => {
        const { email, password} = this.state;

        try {
           const user = await firebase.auth()
            .signInWithEmailAndPassword(email, password);

            this.setState({ isAuthenticated: true });
            alert("Logado com sucesso!");
        } catch (error) {
            alert(error);
            console.log(error)
        }
    }

    cadastro = async () => {
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    value={this.state.email}
                    autoCapitalize='none'
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    value={this.state.password}
                    secureTextEntry
                    autoCapitalize='none'
                    onChangeText={password => this.setState({ password })}
                />

                <TouchableOpacity style={styles.button} onPress={this.login}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>

                { this.state.isAuthenticated ? 
                    <Text style={styles.logado}>
                        Logado com sucesso!
                    </Text> : null
                }

                <TouchableOpacity style={styles.button} onPress={this.cadastro}>
                    <Text style={styles.buttonText}>
                        Cadastre-se
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,

    },
    input: {
        height: 45,
        backgroundColor: '#EEE',
        alignSelf: 'stretch',
        borderColor:  '#EEE',
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    button: {
        height: 45,
        backgroundColor: '#069',
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    logado: {
        fontWeight: 'bold',
        color: 'black',
    }
})