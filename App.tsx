import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BotaoPrincipal  from './components/BotaoInterativo';
//Aluno: Carlos Alexandre de Oliveira Reinato
//O programa foi dividido em um tsx para a estilização, um tsx para a configuração e exportação do botão e este tsx principal, que exibe o botão. 

export default function App() {
  return (
    <View style={styles.container}>

    <BotaoPrincipal></BotaoPrincipal>
    
    <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
