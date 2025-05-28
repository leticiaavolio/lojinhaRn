import { View, Text, FlatList } from "react-native";
import ProductItem from "../../components/ProductItem/ProductItem";
import {getAllProducts} from "../../services/product";
import React from "react";

export default function Categories() {
    const products= getAllProducts();
    return (
        <View>
            <FlatList data={products}//informando a fonte de dados da flatlist
            renderItem={({item})=><ProductItem product={item}/>}//informando a função que renderizará cada item, estamos usando uma arrow function no caso
            keyExtractor={id=>id.id.toString()}//identificação do index de cada item
            />
        </View>
    );
}