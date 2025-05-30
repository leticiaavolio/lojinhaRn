import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import { Category } from "../../types/category";


type Props = {
    category:Category;
}


export default function CategoryItem({category}:Props) {

    function handleClick(){
        router.push(`/categories/${category.id}`)
    }

    return (
        <TouchableOpacity style={styles.button} onPress={handleClick}>
            <Image source={{uri: category.cover}} style={styles.img}/> 
            <Text style={styles.text}>{category.title}</Text> 
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height:140,
        width:'80%',
        justifyContent:'center',
        alignSelf:'center',
        margin:20,
        backgroundColor:'black',
        borderRadius:10,
        overflow:'hidden'
    },
    text:{
        fontSize:30,
        color:'white',
        alignSelf:'center',
        position:'absolute',
    },
    img:{
        width:'100%',
        height:'100%',
        opacity: 0.3,
    }
})