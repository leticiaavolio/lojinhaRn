import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
 
export default function Teste() {
    return (
        <View style={styles.container}>
            <Text>Página Teste</Text>
            <Link href="/teste">Ir para Home</Link>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
 