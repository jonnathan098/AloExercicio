import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react"
import TelaHomen from "./TelaHomen"
import TelaAvaliaçao from "./TelaAvaliaçao"

const Navegacao: React.FC =() => {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="TelaHomen" component={TelaHomen} />
         <Stack.Screen name="TelaAvaliaçao" component={TelaAvaliaçao} />

        </Stack.Navigator>
      </NavigationContainer>
    );
};
 
type StackParams = {
    TelaHomen: undefined,
    TelaAvaliaçao: undefined,
};



export default Navegacao
export type{ StackParams};