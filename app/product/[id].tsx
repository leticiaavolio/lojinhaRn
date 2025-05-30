import Button from "../../components/button/button";
import { router, useLocalSearchParams } from "expo-router";
import { getProductById } from "../../services/product";
import { SafeAreaView } from "react-native";

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
            alert(`Você comprou o ${product.title} e gastará mais ${product.price}`)
        }
    }

    return(
        <SafeAreaView>
            
        </SafeAreaView>
    )
}