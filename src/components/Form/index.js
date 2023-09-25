import React, { useState} from "react";
import { TextInput, View, Text, TouchableOpacity, Pressable } from "react-native";
import ResultMedia from "./ResultMedia";
import styles from "./style";


export default function Form(){
    const [nota1, setNota1] = useState(null);
    const [nota2, setNota2] = useState(null);
    const [nota3, setNota3] = useState(null);
    const [nota4, setNota4] = useState(null);
    const [messageMedia, setMessageMedia] =useState ("Preencha as Notas!");
    const [media, setMedia] =useState (null);
    const [classi, setClassi] = useState('');
    const [textButton, setTextButton]=useState ("Calcular");


function mediaCalculator() {
    const medias = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

        setMedia(medias);

        if (medias <= 4.9) {
            setClassi('Reprovado Seu Burro');
        } else if (medias >= 5 && medias <= 6.7) {
            setClassi('Recuperação KKKKKK, vai estudar mais');
        } else {
            setClassi('Aprovado  aralho UhUUUU');
        }
}



function validationMedia(){
    if (nota1 !== null && nota2 !== null && nota3 !== null && nota4 !== null) {
        mediaCalculator()
        setNota1(null)
        setNota2(null)
        setNota3(null)
        setNota4(null)
        setMessageMedia("Sua Média é: ")
        setTextButton ("Calcular Novamente")
return
}
    setMedia(null)
    setTextButton("Calcular")
    setMessageMedia("Preencha as Notas para Calcular!")
}

return(
<View style={styles.formContext}>
    <View style={styles.form}>

        <Text style={styles.label}>Nota1: </Text>
        <TextInput style={styles.input}  onChangeText={setNota1} value={nota1} placeholder="ex: 10.0" keyboardType="numeric"/>

        <Text style={styles.label}>Nota2: </Text>
        <TextInput style={styles.input}  onChangeText={setNota2} value={nota2} placeholder="ex: 10.0" keyboardType="numeric"/>

        <Text style={styles.label}>Nota3: </Text>
        <TextInput style={styles.input}  onChangeText={setNota3} value={nota3} placeholder="ex: 10.0" keyboardType="numeric"/>

        <Text style={styles.label}>Nota4: </Text>
        <TextInput style={styles.input} onChangeText={setNota4} value={nota4} placeholder="Ex: 10.0" keyboardType="numeric"/>

        <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationMedia()}>
        <Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>


    </View>
    <ResultMedia messageResultMedia={messageMedia} resultMedia={media} messageClassi={classi}/>
</View>
);
}