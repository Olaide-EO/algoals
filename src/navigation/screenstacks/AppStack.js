import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";

// drawer
import CustomDrawerContent from "./Menu";
import InterviewStack from "./interviewstack/InterviewStack";
import AlgorithmStack from "./algorithmstack/AlgorithmStack";
import LeetcodeStack from "./leetcodestack/LeetcodeStack";
import FreeMaterials from "./freematerials/FreeMaterialStack";
import PlaygroundStack from "./playgroundstack/PlaygroundStack";
import AboutStack from "./aboutstack/AboutStack";
import argonTheme from "../../constants/Theme";

const { width } = Dimensions.get("screen");
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: argonTheme.COLORS.WHITE,
        width: width * 0.8,
      }}
      drawerContentOptions={{
        inactiveTintColor: "#000",
        activeBackgroundColor: argonTheme.COLORS.WHITE,
        itemStyle: {
          width: width * 0.75,
          backgroundColor: argonTheme.COLORS.WHITE,
          paddingVertical: 16,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal",
        },
      }}
      sceneContainerStyle={{backgroundColor: argonTheme.COLORS.WHITE}}
      initialRouteName="Algorithms"
      drawerType="back"
      overlayColor="rgba(0,0,0,0.3)"
    >
      <Drawer.Screen name="Algorithms" component={AlgorithmStack} />
      <Drawer.Screen name="TechInterview" component={InterviewStack} />
      <Drawer.Screen name="Leetcodes" component={LeetcodeStack} />
      <Drawer.Screen name="FreeMaterials" component={FreeMaterials} />
      <Drawer.Screen name="PlayGround" component={PlaygroundStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
};

export default AppStack;
