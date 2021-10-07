import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//redux
import { useSelector } from "react-redux";

// screens
import AlgorithmTabNavigator from "./navigationtabs/NavigationTabs";
import AlgorithmMenu from "../../../screens/algorithm/AlgorithmMenu";
import Search from "../../../screens/algorithm/Search";

// header for screens
import { MainHeader } from "../../../components";
import { argonTheme } from "../../../constants";

const Stack = createStackNavigator();

const AlgorithmStack = () => {
  const title = useSelector((state) => state.algorithm.algorithmTitle);
  const currentScreen = "Javascript"
  const stateSelector = "algorithm";
  const rootScreen = "Algorithms";
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Algorithms"
        component={AlgorithmTabNavigator}
        options={({route}) => ({
          header: ({navigation}) => {
            return (
              <MainHeader
                {...{ title, stateSelector, rootScreen, currentScreen, navigation, route }}
              />
            );
          },
          cardStyle: { backgroundColor: argonTheme.COLORS.WHITE },
        })}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={({route}) => ({
          header: ({navigation}) => {
            return (
              <MainHeader
                {...{ title, stateSelector, rootScreen, currentScreen, navigation, route }}
              />
            );
          },
          cardStyle: { backgroundColor: argonTheme.COLORS.WHITE },
        })}
        initialParams={{
          name: currentScreen,
        }}
      />

      <Stack.Screen
        name="AlgorithmMenu"
        component={AlgorithmMenu}
        options={{
          headerShown: false,
          headerTransparent: true,
          cardStyle: { backgroundColor: argonTheme.COLORS.WHITE },
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AlgorithmStack;
