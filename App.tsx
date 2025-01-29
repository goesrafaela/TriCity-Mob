import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./src/screens/Welcome";
import CadScreen from "./src/screens/Cad";
import ConfirmationScreen from "./src/screens/Confirm";


const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="CadScreen" component={CadScreen}/>
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}