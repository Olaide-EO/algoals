import React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Block, Text, theme } from "galio-framework";
import argonTheme from "../../constants/Theme";
import Images from "../../constants/Images";
import { DrawerItem as DrawerCustomItem } from "../../components";

const CustomDrawerContent = ({ progress, navigation, state }) => {
  const insets = useSafeAreaInsets();

  const screens = [
    { label: "Algorithms", name: "Algorithms" },
    { label: "Tech Interview", name: "TechInterview" },
    { label: "Leetcodes", name: "Leetcodes" },
    { label: "Free Materials", name: "FreeMaterials" },
    { label: "Playground", name: "PlayGround" },
  ];

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const st = [styles.container, { transform: [{ translateX }] }];

  return (
    <Animated.View style={st}>
      <Block
        flex={0.07}
        style={[
          styles.header,
          { paddingTop: insets.top === 0 ? insets.top + 25 : insets.top },
        ]}
      >
        <Image style={styles.logo} source={Images.LogoDark} />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={true}>
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                menuItem={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}

          <Block
            flex
            style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}
          >
            <Block
              style={{
                borderColor: argonTheme.COLORS.MUTED,
                width: "100%",
                borderWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Text
              color={argonTheme.COLORS.MUTED}
              style={{ marginTop: 16, marginLeft: 8 }}
            >
              DOCUMENTATION
            </Text>
          </Block>
          <DrawerCustomItem
            menuItem={{ label: "About", name: "About" }}
            navigation={navigation}
            focused={false}
          />
        </ScrollView>
      </Block>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: argonTheme.COLORS.WHITE,
  },
  header: {
    paddingHorizontal: 32,
    paddingBottom: 15,
    // paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    width: 140,
    // height: 80,
    resizeMode: "contain",
  },
});

export default CustomDrawerContent;
