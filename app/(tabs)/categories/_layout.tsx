import {Stack} from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getallCategories } from '../../../services/category';

export default function CategoriesLayout(){
    return(
        <Stack>
            <Stack.Screen name="categories" options={{title:'Lista de Categoria'}}/>
            <Stack.Screen name="[id]" options={{title:'Produtos por Categoria'}}/>
        </Stack>
    )
}