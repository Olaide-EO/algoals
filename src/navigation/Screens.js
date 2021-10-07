import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import Onboarding from "../screens/onboarding";
import AppStack from "./screenstacks/AppStack";

const Stack = createStackNavigator();

export default function OnboardingStack() {
  const newUser = useSelector((state) => state.UI.newUser);

  return (
    <Stack.Navigator mode="card" headerMode="none">
      {newUser ? (
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerTransparent: true,
          }}
        />
      ) : (
        <Stack.Screen name="App" component={AppStack} />
      )}
    </Stack.Navigator>
  );
}
