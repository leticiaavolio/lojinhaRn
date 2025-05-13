import { Pressable, Text } from "react-native";
import { styles } from './buttonStyle';


type Props = {
    title: string,
    function:() => void //criando um para parâmetro para passar uma função

}


export default function Button(props:Props) {

    return (

        <Pressable onPress={props.function} style={styles.button}>
            <Text style={styles.buttonText}> {props.title}</Text>
        </Pressable>
    );
}