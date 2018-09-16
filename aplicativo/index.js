import React, { Component } from 'react';
import firebase from 'firebase';
import {AppRegistry, View, Text, Button, StyleSheet,} from 'react-native';
import {name as appName} from './app.json';
import Login from './telas/Login'
import Splash from './telas/Splash'
import TesteLogin from './telas/TesteLogin'

export default class Main extends Component {

    // Exibe a tela de Splash por 3 segundos
    /*
    constructor(props) {
        super(props);
        this.state = {currentScreen: 'Splash'};
        setTimeout(()=>{
            this.setState({ currentScreen: 'Login' })
        }, 3000)
    }
    render() {
        const {currentScreen} = this.state;
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />;
        return mainScreen
    }
    */
}

AppRegistry.registerComponent(appName, () => Splash);


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
