import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Alert, Image } from 'react-native';
import {styles} from './BotaoInterativoStyle';


export default function BotaoPrincipal() {
  const [cliques, setCliques] = useState(0); // 
  const [tempoDecorrido, setTempoDecorrido] = useState(0);
  const [pressionado, setPressionado] = useState(false); 
  const [timerIniciado, setTimerIniciado] = useState(false);
  const [velocidadeMedia, setVelocidadeMedia] = useState(0);

  useEffect(() => {
    let timer; //Declaração da variável do tempo
    if (timerIniciado) {
      timer = setInterval(() => {
        setTempoDecorrido((prevTempo) => prevTempo + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [timerIniciado]);

  function adicionarCliques() {
    const qtdCliques = cliques + 1;
    if (!timerIniciado) {
      setTimerIniciado(true);
    }
    setCliques(qtdCliques);
  }
  
  function pressionarLongo() {
    if (tempoDecorrido > 0) {
      const media = cliques / tempoDecorrido;
      Alert.alert(
        "Média de Cliques",
        `A média é de ${media} cliques por segundo.`
      );
    }
  }

  useEffect(() => {
    if (tempoDecorrido > 0) {
      const media = cliques / tempoDecorrido;
      setVelocidadeMedia(media);
    } else {
      setVelocidadeMedia(0);
    }
  }, [cliques, tempoDecorrido]);


  function zerarContadores() {
    setCliques(0);
    setTempoDecorrido(0);
    setTimerIniciado(false);
    setPressionado(false);
  }

  const getEstiloBotao = () => {
    if (pressionado) {
        return { opacity: 0.6 };
    } else {
        return { opacity: 1.0 }; 
    }
  };

  return (
    
    <View style={styles.container}>

        <Pressable
          onPress={adicionarCliques}
          onPressIn={() => setPressionado(true)}
          onPressOut={() => setPressionado(false)}
          onLongPress={pressionarLongo}
          style={({ pressed }) => [
            {
              opacity: pressed? 0.6 : 1.0, 
            },
            styles.buttonImage, 
          ]}
        >
        <Image
            source={require('../assets/imagem.png')}
            style={[styles.buttonImage, getEstiloBotao()]} 
          />
        </Pressable>  

        <View>
            <Text style={styles.titulo}>
              Total de gols do Gabigol: {cliques}
            </Text>
            <Text style={styles.titulo}>
              Tempo total: {tempoDecorrido} segundos
            </Text>
            <Text style={styles.titulo}>
              Velocidade de cliques: {velocidadeMedia.toFixed(2)}
            </Text>
        </View>
        <Pressable style={styles.button} onPress={(zerarContadores)}>
            <Text style={styles.buttonText}>ZERAR</Text>
        </Pressable>
      </View>
  );
}


