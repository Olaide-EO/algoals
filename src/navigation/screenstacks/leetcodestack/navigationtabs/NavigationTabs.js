import React from "react";
import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as Animatable from "react-native-animatable";
import TopBar from "../../../../components/TopBar";
import { leetcodeTabs } from "../../../../constants/tabs";
import argonTheme from "../../../../constants/Theme";
import LeetcodeScreenComponent from "../../../../screens/leetcode/LeetcodeScreenComponent";

const Tab = createMaterialTopTabNavigator();

const LeetcodeTabNavigator = () => {

  return (
    <Tab.Navigator
      mode="card"
      headerMode="screen"
      initialLayout={{ width: Dimensions.get("window").width }}
      sceneContainerStyle={{ backgroundColor: argonTheme.COLORS.WHITE }}
      tabBar={(props) => (
        <Animatable.View
          animation="slideInDown"
          delay={500}
          useNativeDriver={true}
        >
          <TopBar {...props} />
        </Animatable.View>
      )}
      swipeEnabled={false}
      lazy={true}
      removeClippedSubviews={true}
    >
      {leetcodeTabs.categories.map((algorithmObject) => {
        return (
          <Tab.Screen
            name={algorithmObject.title}
            key={algorithmObject.id}
            initialParams={{
              name:
                algorithmObject.title === "C#"
                  ? "Csharp"
                  : algorithmObject.title === "C++"
                  ? "Cplusplus"
                  : algorithmObject.title,
            }}
            component={LeetcodeScreenComponent}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default LeetcodeTabNavigator;
