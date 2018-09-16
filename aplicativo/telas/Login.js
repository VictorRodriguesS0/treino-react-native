import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, Button, StyleSheet,
    TextInput, Keyboard} from 'react-native';

export default class Login extends Component {

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

    cadastrarUsuario() {
        var email = "manovictor10@gmail.com";
        var senha = "123456";

        const usuario = firebase.auth();

        usuario.createUserWithEmailAndPassword(
            email,
            senha
        ).catch(
            (erro) => {
                var mensagemErro = "";
                if(erro.code == "auth/weak-password"){
                    mensagemErro = "A senha precisa ter no mínimo 6 caracteres!";
                } else if(erro.code == "auth/email-already-in-use") {
                    mensagemErro = "Email já cadastrado!"
                } else if (erro.code == "auth/invalid-email") {
                    mensagemErro = "Email inválido!"
                }
                alert( mensagemErro );
            }
        )
    }

    verificarUsuarioLogado() {
        const usuario = firebase.auth();
        usuario.onAuthStateChanged(
            (usuarioAtual) => {
                if( usuarioAtual ) {
                    alert("Usuário está logado");
                } else {
                    alert("Usuário não está logado");
                }
            }
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Testeeeee
                </Text>
                <Button 
                    onPress={ ()=>{this.cadastrarUsuario(); } }
                    title="Cadastrar Usuário"
                    color="#841584"
                    accessibilityLabel="Cadastrar Usuário">
                </Button>
                <Button 
                    onPress={ ()=>{this.verificarUsuarioLogado(); } }
                    title="Verificar Usuario Logado"
                    color="#841584"
                    accessibilityLabel="Verificar Usuario Logado">
                </Button>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})