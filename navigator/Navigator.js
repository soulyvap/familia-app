import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Chapter from "../views/Chapter";
import Home from "../views/Home";
import Notes from "../views/Notes";
import NewNote from "../views/NewNote";

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
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

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default Navigator;
