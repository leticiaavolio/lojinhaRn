import { TouchableOpacity, Text, StyleSheet, Image, Pressable, View } from "react-native";
import { router } from "expo-router";
import { Product } from "../../types/product";
/* import { styles } from './buttonStyle'; */


type Props = {
    product:Product;
}


export default function ProductItem({product}:Props) {

    return (
        <Pressable style={styles.item}>
            <Image source={{uri: product.image}} style={styles.img}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>R${product.price}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item:{
        width: '90%',
        height:160,
        borderBottomColor:'#808080',
        borderBottomWidth:0.5,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
    },
    img:{
        width:'35%',
        height:'70%',
        borderRadius:10
    },
    textContainer:{
        flexDirection:'column',
        width: '60%',
        marginLeft:20,
    },
    title:{
        fontSize:16,
        color:'#E67A31',
        fontWeight:'bold',
        marginBottom:10,
    },
    description:{
        fontSize:14,
        fontWeight:'light',
        marginBottom:10,
    },
    price:{
        fontSize:16,
        color:'#E67A31',
        fontWeight:'bold',
        marginLeft:130,    
    }
})