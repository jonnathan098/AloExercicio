import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react" ;
import imagem from "../modelos/Item";
import { View,Text, ListRenderItem, FlatList, TouchableOpacity, Image, SafeAreaView,Button} from "react-native";
import styles from "../stilhos/estilhosPagina1";
import { StackParams } from "./Navegaçao";
import { StyleSheet, } from "react-native"
import Item from "../modelos/Item";
import Images from "../stilhos/Imagems";
        
const item: imagem [] = [
    {
    id: 1,
    url:'transferir.png'
    },
    {id: 2,
    url:''
   },
   {id: 3,
        url:'https://cdn-icons-png.flaticon.com/512/33/33308.png'
    },
    {id: 4,
        url:'https://cdn-icons-png.flaticon.com/512/33/33308.png'
    },
]

type Props = NativeStackScreenProps<StackParams,'TelaAvaliaçao'>;
const TelaAvaliaçao: React.FC<Props>= (Props) => {
    const botaoLoginPressionado = () => {}
    const renderFlatListItem: ListRenderItem<Item> = ({item}) => {
        return (
        < View style={styles.container02}>
          <Image  style={styles.Image} source={{uri: 'https://i.pinimg.com/originals/6d/d3/e3/6dd3e3309072f2538f97ec14d9de3e07.jpg'}} />
                <Button onPress={botaoLoginPressionado}title="OK!"color="#841584"/>
            <Image  style={styles.Image} source={{uri: 'https://i.pinimg.com/236x/af/1c/30/af1c30d6d881d9447dec06149f61d2f9--drawings-of-girls-anime-drawings-girl.jpg'}} />
                <Button onPress={botaoLoginPressionado}title="OK!"color="#841584"/>
            <Image  style={styles.Image} source={{uri: 'http://pm1.narvii.com/6690/70244b37b6341a55d181727de30ae4af62979109_00.jpg'}} />
                <Button onPress={botaoLoginPressionado}title="OK!"color="#841584"/>
            <Image  style={styles.Image} source={{uri: 'https://gamelogia.com.br/wp-content/uploads/2017/08/imagens-anime-13.jpg'}} />
                <Button onPress={botaoLoginPressionado}title="OK!"color="#841584"/>
            <Image  style={styles.Image} source={{uri: 'https://i.pinimg.com/originals/f7/fe/2e/f7fe2e21ff411a12aa1717c1400ae69b.jpg'}} />
            <Button onPress={botaoLoginPressionado}title="OK!"color="#841584"/>
            <Image  style={styles.Image} source={{uri: 'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/10/spy-family-anime-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'}} />
            <Button onPress={botaoLoginPressionado}title="OK!"color="#841584"/>
        </View>
      )
      }
    return(
        <View style={styles.container01}>
        <FlatList renderItem={renderFlatListItem} data={item} />
        </View>
    )
}
export default TelaAvaliaçao