import Button from "../../components/button/button";
import { router, useLocalSearchParams } from "expo-router";
import { getProductById } from "../../services/product";
import { SafeAreaView, ScrollView,StyleSheet, Image, View, Text } from "react-native";

export default function ProductScreen(){
    const {id} = useLocalSearchParams();
    //Acima, pegando o que vem como parametro usando o hook useLocalSearchParams = pode pegar um ou um array
    const idProduct = parseInt(id as string);
    //Acima como virá sempre um único e não um array temos que dizer que queremos pegar como uma string e transforma-lo em INT


    const product = getProductById(idProduct);
    //Acima, pega o produto pelo id recebido para ter acesso aos seus dados na tela
    if(!product) return router.back;
    //Se não veio produto, retornamos para a pagina anterior -- programação defensiva

    function handleComprar(){
        if(product){
            alert(`Você comprou ${product.title} e gastará mais R$${product.price}`)
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.productArea} contentContainerStyle={{justifyContent:'center',
        alignItems:'center',gap:16}}>
                <Image
                    style={styles.image}
                    source={{ uri: product.image }}
                    resizeMode="cover"
                />
                <View style={styles.detailsArea}>
                    <Text style={styles.title}> {product.title} </Text>
                    <Text style={styles.description}> {product.description} </Text>
                </View>
                <Text style={styles.price}>
                    R$ {product.price.toFixed(2)}
                </Text>
            </ScrollView>
            <View style={styles.buttonArea}>
                <Button title="Comprar" function={handleComprar} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productArea: {
        flex: 1,
        padding: 20        
    },
    buttonArea: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 250,
        padding: 20,
        borderRadius: 10
       
    },
    detailsArea:{
        width:"100%",
        justifyContent:'center',
        alignItems:"center",
        color:"#E67A31",
        borderStyle:'solid',
        borderWidth:1,
        borderColor:"#E67A31",
        borderRadius:10,
        padding:20,
        gap:16
    },
    title:{
        fontSize:28,
        fontWeight:'bold'
    },
    description:{
        fontSize:16
    },
    price:{
        backgroundColor:"#F5DAB8",
        width:"100%",
        fontSize:24,      
        textAlign:'center',
        padding:20,      
        borderRadius:10,
        color:"#FF0000"
 
    }
})