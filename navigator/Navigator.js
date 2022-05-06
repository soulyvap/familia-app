import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import Home from "../views/offline/Home";
import Chapter from "../views/offline/Chapter";
import NewNote from "../views/offline/NewNote";
import Notes from "../views/offline/Notes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Start from "../views/offline/Start";

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const checkFirstTime = async () => {
    const isFirstTime = await AsyncStorage.getItem("isFirstTime");
    setIsFirstTime(isFirstTime === "true");
  };

  useEffect(() => {
    checkFirstTime();
  }, []);

  return (
    <Stack.Navigator>
      {isFirstTime ? (
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Start"
            component={Start}
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
        </>
      )}
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
