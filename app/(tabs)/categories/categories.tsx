import { View, Text, FlatList } from "react-native";
import CategoryItem from '../../../components/CategoryItem/categoryItem';
import { getallCategories } from "../../../services/category";
import React from "react";
/* 
import Eletronicos from '../../../assets/eletronicos.jpg';
import Acessorios from '../../../assets/acessorios.jpg';
import Paisagens from "../../../assets/paisagens.jpg"; */

export default function Categories() {
    const categories= getallCategories();
    return (
        <View>
            {/* <CategoryItem title="Eletrônicos" imagem={Eletronicos}/>
            <CategoryItem title="Acessórios" imagem={Acessorios}/>
            <CategoryItem title="Paisagens" imagem={Paisagens}/> */}

            {/* {categories.map((item)=>(
                <CategoryItem category={item}></CategoryItem>
            ))} */}

            <FlatList data={categories}//informando a fonte de dados da flatlist
            renderItem={({item})=><CategoryItem category={item}/>}//informando a função que renderizará cada item, estamos usando uma arrow function no caso
            keyExtractor={id=>id.id.toString()}//identificação do index de cada item
            />
        </View>
    );
}