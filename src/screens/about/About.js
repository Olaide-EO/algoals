import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Block } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
import argonTheme from "../../constants/Theme";
import { MainHeader } from "../../components";
import Content from "./Content";

const { width, height } = Dimensions.get("screen");

const About = ({ route }) => {
  const navigation = useNavigation();
  const title = "About";
  const stateSelector = "about";
  const currentScreen = "About";
  const rootScreen = "About";

  return (
    <View style={styles.home}>
      <MainHeader
        {...{
          title,
          stateSelector,
          rootScreen,
          currentScreen,
          navigation,
          route,
        }}
        hideSearch
      />

      <Block style={styles.animationContainer}>
        <Content />
      </Block>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: argonTheme.COLORS.WHITE,
    position: "relative",
  },

  title: {
    color: "#ffffff",
    fontSize: 27,
  },
  animationContainer: {
    // paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,

  },
});

export default About;
