import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../views/online/Login";
import Register from "../views/online/Register";
import Start from "../views/online/Start";

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const NavigatorOnline = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default NavigatorOnline;
