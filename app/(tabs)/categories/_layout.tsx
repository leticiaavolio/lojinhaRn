import {Stack} from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getallCategories } from '../../../services/category';

export default function CategoriesLayout(){
    return(
        <Stack>
            <Stack.Screen name="categories" options={{title:'Lista de Categoria'}}/>
{/*             <Stack.Screen name="[id]" */}
{/* Colocaremos o titulo desta stack dentro do codigo da mesma pois ele será dinamico não saberemos qual id vira para colocar o titulo */}
        </Stack>
    )
}