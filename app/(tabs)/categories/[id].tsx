import { router, useLocalSearchParams } from "expo-router";
import { getProductsByCategory } from "../../../services/product";
import { SafeAreaView,StyleSheet, FlatList } from "react-native";
import ProductItem from "../../../components/ProductItem/ProductItem";

export default function ProductScreen(){
    const {id} = useLocalSearchParams();

    const idCategory = parseInt(id as string);

    const product = getProductsByCategory(idCategory);
    if(!product) return router.back;

    return(
        <SafeAreaView style={styles.container}>
                <FlatList data={product}
                renderItem={({item})=><ProductItem product={item}/>}
                keyExtractor={id=>id.id.toString()}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
})