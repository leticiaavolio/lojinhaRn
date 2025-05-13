import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
/* import { styles } from './buttonStyle'; */


type Props = {
    title: string,
    imagem: object,
}


export default function CategoryItem(props:Props) {

    return (
        <TouchableOpacity style={styles.button}>
            <Image source={props.imagem} style={styles.img}/> 
            <Text style={styles.text}>{props.title}</Text> 
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height:130,
        width:'80%',
        justifyContent:'center',
        alignSelf:'center',
        margin:20,
        backgroundColor:'black',
        borderRadius:10,
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