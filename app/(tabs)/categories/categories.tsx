import { View, Text } from "react-native";
import CategoryItem from '../../../components/CategoryItem/categoryItem';

import Eletronicos from '../../../assets/eletronicos.jpg';
import Acessorios from '../../../assets/acessorios.jpg';
import Paisagens from "../../../assets/paisagens.jpg";

export default function Home() {

    return (
        <View>
            <CategoryItem title="Eletrônicos" imagem={Eletronicos}/>
            <CategoryItem title="Acessórios" imagem={Acessorios}/>
            <CategoryItem title="Paisagens" imagem={Paisagens}/>
        </View>
    );
}