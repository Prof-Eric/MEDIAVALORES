import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Rodape(){
    return(
        <View style={styles.formContext}>
            <View style={styles.formMain}>
                <Text style={styles.labelMain}>MÉDIA</Text>
                <Text style={styles.labelMain}>Cassificação</Text>
            </View>
            <Text style={styles.line}>---------------------------------------------------</Text>
            

            <View style={styles.form}>
                <Text style={styles.label}>Menor que 4,9</Text>
                <Text style={styles.label}>Reprovado</Text>
            </View>
            <Text style={styles.line}>---------------------------------------------------</Text>

            <View style={styles.form}>
                <Text style={styles.label}>De 5,0 a 6,7</Text>
                <Text style={styles.label}>Recuperação</Text>
            </View>
            <Text style={styles.line}>---------------------------------------------------</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Maior que 6,8</Text>
                <Text style={styles.label}>Aprovado</Text>
            </View>
            <Text style={styles.line}>---------------------------------------------------</Text>

            
        </View>
    );
}