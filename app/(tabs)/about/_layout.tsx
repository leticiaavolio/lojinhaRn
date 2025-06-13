import {Stack} from 'expo-router';
import React from 'react';

export default function CategoriesLayout(){
    return(
        <Stack screenOptions={{headerShown:true}}>
            <Stack.Screen name="about" options={{title:'Sobre Nós'}}/>
            <Stack.Screen name="aboutSp" options={{title:'Filial São Paulo'}}/>
            <Stack.Screen name="aboutRj" options={{title:'Filial Rio de Janeiro'}}/>
        </Stack>
    )
}