import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NewNote from "../views/online/NewNote";
import Notes from "../views/online/Notes";
import Chapter from "../views/online/Chapter";
import Home from "../views/online/Home";
import Login from "../views/online/Login";
import Polls from "../views/online/Polls";
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
      <Stack.Screen
        name="Polls"
        component={Polls}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chapter"
        component={Chapter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewNote"
        component={NewNote}
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
