import React from "react";
import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as Animatable from "react-native-animatable";
import TopBar from "../../../../components/TopBar";
import { freematerialsTabs } from "../../../../constants/tabs";
import argonTheme from "../../../../constants/Theme";
import FreeMaterialsScreenComponent from "../../../../screens/freematerials/FreeMaterialScreenComponent";

const Tab = createMaterialTopTabNavigator();

const InterviewTabNavigator = () => {

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
      {freematerialsTabs.categories.map((freeMaterial) => {
        return (
          <Tab.Screen
            name={freeMaterial.title}
            key={freeMaterial.id}
            initialParams={{
              name: freeMaterial.title,
            }}
            component={FreeMaterialsScreenComponent}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default InterviewTabNavigator;
