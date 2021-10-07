import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//redux
import { useSelector } from "react-redux";

// screens
import InterviewTabNavigator from "./navigationtabs/NavigationTabs";
import InterviewMenu from "../../../screens/interview/InterviewMenu";

// header for screens
import { MainHeader } from "../../../components";

//constants
import { argonTheme } from "../../../constants";

const Stack = createStackNavigator();

const InterviewStack = () => {
  const title = useSelector((state) => state.interview.interviewTitle);
  const stateSelector = "interview";
  const currentScreen = "Interview University";
  return (
    <Stack.Navigator
      initialRouteName="Interview"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="Interview"
        component={InterviewTabNavigator}
        options={({ route }) => ({
          header: ({ navigation }) => {
            return (
              <MainHeader
                hideSearch
                {...{ title, stateSelector, currentScreen, navigation, route }}
              />
            );
          },
          cardStyle: { backgroundColor: argonTheme.COLORS.WHITE },
        })}
      />

      <Stack.Screen
        name="InterviewMenu"
        component={InterviewMenu}
        // mode="card"
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
