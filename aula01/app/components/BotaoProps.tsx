import React from 'react'; // importação do react (pai) para o react-native (filho), o arquivo fica no nodule models//
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; //importação das "bibliotecas"... quando uma importação está apagada quer dizer que ela não está sendo usada no arquivo//

const BotaoProps = ({ label, corFundo , onPress }) => { //Criação de uma função anonima, que recebe parametros// Nome da função principal precisa ser o mesmo que o do arquivo//

    const botaoStyle = {   // criação do objeto//
        backgroundColor: corFundo,
        padding: 10,
        borderRadius:5,
    };

    return ( // retornará algo no front-end // 
        <TouchableOpacity onPress={onPress} style={botaoStyle}> 
            <Text>{label}</Text>   //o que está em chaves está sendo chamado//
        </TouchableOpacity>
    );
};

export default BotaoProps; //exporta a função com o mesmo nome do objeto para mostrar//