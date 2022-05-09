import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Chapter from "../views/online/Chapter";
import Home from "../views/online/Home";
import NewNote from "../views/online/NewNote";
import Notes from "../views/online/Notes";
import Polls from "../views/online/Polls";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="Polls"
          component={Polls}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserStack;
