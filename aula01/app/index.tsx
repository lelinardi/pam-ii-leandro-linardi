import React from 'react';
import { View, StyleSheet } from 'react-native';
import BotaoProps from './components/BotaoProps'; // Importa o que foi criado e a pasta de criação//


const App = () => { // função anonima sem parametros//
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  const teste = () => {
    console.log('Segundo teste');
  };

  return(  // retorna o que aparecerá na tela//
    <View style={styles.container}> // tudo o que deve estar dentro de uma div deve estar dentro da View//
      <BotaoProps label = "Clique aqui" corFundo="green" onPress={handlePress}/> // chama o componente de acordo com a forma que foi implantado//
      <BotaoProps label = "Clique agora" corFundo="pink" onPress={handlePress}/>
    </View>
  );
};

const styles= StyleSheet.create({  // estilo que foi criado para o container//
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App; 
