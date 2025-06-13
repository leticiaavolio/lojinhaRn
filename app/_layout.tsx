import { StyleSheet } from "react-native";
import React from "react";
import {Stack} from 'expo-router'; 
 

//layout serve para chamar as routas 
export default function RootLayout(){
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name= "(tabs)" options={{title: "Produtos"}}/>
            <Stack.Screen name= "product/[id]" options={{headerShown:true, title: ""}}/>
            
        </Stack>
    )
}
const styles = StyleSheet.create({
   
    
})
 