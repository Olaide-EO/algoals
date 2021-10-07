import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//redux
import { useSelector } from "react-redux";

// screens
import LeetcodeTabNavigator from "./navigationtabs/NavigationTabs";
import LeetcodeMenu from "../../../screens/leetcode/LeetcodeMenu";
import Search from "../../../screens/leetcode/Search";

// header for screens
import { MainHeader } from "../../../components";
import { argonTheme } from "../../../constants";

const Stack = createStackNavigator();

const LeetcodeStack = () => {
  const title = useSelector((state) => state.leetcode.title);
  const currentScreen = "Java"
  const stateSelector = "leetcode";
  const rootScreen = "Leetcodes";

  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Leetcodes"
        component={LeetcodeTabNavigator}
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
        name="LeetcodeMenu"
        component={LeetcodeMenu}
        mode="card"
        headerMode="screen"
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

export default LeetcodeStack;
