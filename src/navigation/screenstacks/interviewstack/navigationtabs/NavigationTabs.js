import React from "react";
import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import TopBar from "../../../../components/TopBar";
import { interviewTabs } from "../../../../constants/tabs";
import argonTheme from "../../../../constants/Theme";
import InterviewScreenComponent from "../../../../screens/interview/InterviewScreenComponent";

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
      {interviewTabs.categories.map((interviewObject) => {
        return (
          <Tab.Screen
            name={interviewObject.title}
            key={interviewObject.id}
            initialParams={{
              name: interviewObject.title,
            }}
            component={InterviewScreenComponent}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default InterviewTabNavigator;
