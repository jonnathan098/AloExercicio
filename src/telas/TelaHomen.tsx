import React from "react" ;
import { View,Text, Button } from "react-native";
import styles from "../stilhos/estilhosPagina1";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParams } from './Navegaçao';


type Props = NativeStackScreenProps<StackParams,'TelaHomen'>;
const TelaHomen: React.FC <Props>= (Props) => {
   
    const botaoPressionado = () =>{
        Props.navigation.navigate('TelaAvaliaçao');}

    return(
        <View style={styles.container}>
            <Text style={styles.buttonText}>tudo bem com voce </Text>
            <Button title="ola boara comecar" onPress={botaoPressionado} />
        </View>
    )
}
export default TelaHomen