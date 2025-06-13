import { View, Text,StyleSheet, Image} from "react-native";
import React from "react";

type Props = {
    img: Object,
    title: string,
    paragraph: string,
}
export default function FilialItem(props:Props) {
    return (
        <View style={styles.container}>
            <Image source={props.img} style={styles.img}/>
            <View style={styles.txtContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.paragraph}>{props.paragraph}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    title:{
        fontSize:26,
        fontWeight:'bold',
        alignSelf:'center',
    },
    paragraph:{
        fontSize:20,
        fontWeight:'ultralight',
        textAlign:'center',
        alignSelf:'center',
        width:'95%',
    },
    img:{
        resizeMode:'contain',
        width:360,
        alignSelf:'center',
        flex:1,
        borderRadius:200,
    },
    txtContainer:{
        flex:1,
    }
})