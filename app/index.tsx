import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/button/button'
import { router } from "expo-router";

export default function Index(){
    
    function  navigate(){
        
        router.replace('/home') //navegar para outra de tela (a raiz index) pelo button
    }
    return(
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/loguinho.png')}
                style={styles.logo}
                resizeMode='cover'
            />
            <View>
                <View style={styles.tituloContainer}>
                    <Text style={[styles.titulo, styles.destaque]}>Jukas</Text>
                    <Text style={styles.titulo}>Store</Text>
                </View>
                <Text style={styles.texto}>Aqui seu dinheiro rende mais!</Text>
            </View>
            <Button title="Entrar" function={navigate} />
 
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
    logo: {
        height: 200,
        width: 200,
        marginBottom: 20
    },
    tituloContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 32,
        fontWeight: '900'
    },
    texto: {
        fontSize: 16
    },
    destaque: {
        color: "#E67A31"
    }
 
 
})
 
 