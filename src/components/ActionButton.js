import React from "react";
import { StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import theme from "../constants/Theme";
import Icon from "./Icon";

const FabButton = ({
  navigation,
  currentIndex,
  currentArray,
  language,
  screen
}) => {

  const onClickMenu = () => {
    navigation.navigate(screen, {
      language: language,
      index: currentIndex,
      title: currentArray[currentIndex].title,
      category: currentArray[currentIndex].category,
      id: currentArray[currentIndex].id,
    });
  };

  return (
    <ActionButton
      position="right"
      offsetX={15}
      buttonColor={theme.COLORS.PRIMARY_LIGHT}
      useNativeFeedback={true}
      onPress={onClickMenu}
      renderIcon={(active) => <Icon name="menu" family="entypo" style={styles.actionButtonIcon} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});


export default FabButton;
