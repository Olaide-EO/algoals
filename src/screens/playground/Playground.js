import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Block } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import argonTheme from "../../constants/Theme";
import { MainHeader } from "../../components";

const { width, height } = Dimensions.get("screen");

const Playground = ({ route }) => {
  const navigation = useNavigation();
  const title = "Playground";
  const stateSelector = "playground";
  const currentScreen = "Playground";
  const rootScreen = "Playground";

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

      <Block center style={styles.animationContainer}>
        <LottieView
          style={{ height: height / 2.3, width, zIndex: 2 }}
          source={require("../../assets/lottie/comingsoon.json")}
          autoPlay
          loop
        />
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
    padding: 16,
    marginTop: 40,
    width: width - 46,
  },
});

export default Playground;
