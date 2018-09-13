var React = require('react');
var Text = require('react-native').Text;
var View = require('react-native').View;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;

const geraNumeroAleatorio = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);
  alert(numeroAleatorio);
}

const App = () => {
  return (
    <View>
      <Text>Gerador de Numero randomico</Text>
      <Button
        title="Gerar um numero randômico"
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};


AppRegistry.registerComponent('myapp', () => App);
