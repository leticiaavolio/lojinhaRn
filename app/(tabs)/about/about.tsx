import { View, Text,StyleSheet} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from "react";
import { router } from "expo-router";
import Button from "../../../components/button/button";

export default function About() {
    function navigateSp(){
        router.navigate('/about/aboutSp') //navegar para outra de tela (a raiz index) pelo button
    }
    function navigateRj(){
        router.navigate('/about/aboutRj') //navegar para outra de tela (a raiz index) pelo button
    }
    return (
        <View style={styles.container}>
            <FontAwesome size={100} name="bolt" style={styles.img}></FontAwesome>
            <Text style={styles.title}>Quem Somos?</Text>
            <Text style={styles.subtitle}>Seja bem-vindo a Lojinha!</Text>
            <Text style={styles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, modi eum amet a reprehenderit omnis commodi magni at veniam, tempore nesciunt itaque. Omnis sunt veritatis cum! Minus ea quibusdam error?</Text>
            <Text style={styles.subtitle}>Conheça nossas filiais</Text>
            <View style={styles.BtnContainer}>
                <Button title="Filial São Paulo" function={navigateSp}/>
                <Button title="Filial Rio de Janeiro" function={navigateRj}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    title:{
        fontSize:26,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:20,
    },
    img:{
        color:'#E67A31',
        alignSelf:'center',
        marginBottom:30,
    },
    subtitle:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:20,
    },
    paragraph:{
        fontSize:20,
        fontWeight:'ultralight',
        textAlign:'center',
        alignSelf:'center',
        width:'95%',
    },
    BtnContainer:{
        flex:.75,
        justifyContent:'space-around',
        width:'90%',
        alignSelf:'center',
    }
})