import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//redux
import { useSelector } from "react-redux";

// screens
import FreeMaterialNavigationTab from "./navigationtabs/NavigationTabs";
import FreeMaterialMenu from "../../../screens/freematerials/FreeMaterialMenu";
import Search from "../../../screens/freematerials/Search";

// header for screens
import { MainHeader } from "../../../components";

//constants
import { argonTheme } from "../../../constants";

const Stack = createStackNavigator();

const InterviewStack = () => {
  const title = useSelector((state) => state.freeMaterials.title);
  const stateSelector = "freeMaterials";
  const rootScreen = "FreeMaterials"
  const currentScreen = "Free Books"

  return (
    <Stack.Navigator
      initialRouteName="FreeMaterials"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="FreeMaterials"
        component={FreeMaterialNavigationTab}
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
        name="FreeMaterialsMenu"
        component={FreeMaterialMenu}
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

export default InterviewStack;
