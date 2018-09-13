var React = require('react');
var { Text, View, Button, AppRegistry } = require('react-native');

const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.random();
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
