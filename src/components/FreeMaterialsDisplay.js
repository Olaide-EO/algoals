import React, { Fragment } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Block, Text } from "galio-framework";
import * as Animatable from "react-native-animatable";
import { useFocusEffect } from "@react-navigation/native";
import Markdown from "react-native-markdown-display";
import { Icon } from "./";
import argonTheme from "../constants/Theme";
import { styles, markdownStyles } from "../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_FREE_MATERIAL_TITLE,
  SET_CURRENT_FREE_MATERIAL_INDEX,
} from "../redux/types";

const FreeMaterialsDisplay = ({ language, currentFreeMaterialArray }) => {
  const currentFreeMaterialsIndex = useSelector(
    (state) => state.freeMaterials[language].currentIndex
  );

  const [nextIndex, setNextIndex] = React.useState(null);
  const [prevIndex, setPrevIndex] = React.useState(null);
  const dispatch = useDispatch();
  const scrollRef = React.useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      setTitle();
      scrollToTop();
      setPrevIndex(findPrevIndex(currentFreeMaterialsIndex));
      setNextIndex(findNextIndex(currentFreeMaterialsIndex));
    }, [currentFreeMaterialsIndex, language])
  );

  const scrollToTop = () =>
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });

  const setTitle = () => {
    dispatch({
      type: SET_FREE_MATERIAL_TITLE,
      payload: currentFreeMaterialArray[currentFreeMaterialsIndex].title,
    });
  };

  const setFreeMaterialIndex = (index) => {
    dispatch({
      type: SET_CURRENT_FREE_MATERIAL_INDEX,
      payload: { language, index },
    });
  };

  const onPressPrev = async () => {
    setFreeMaterialIndex(prevIndex);
  };

  const onPressNext = async () => {
    setFreeMaterialIndex(nextIndex);
  };

  const findPrevIndex = (currentIndex) => {
    const prevIndexFinder = (curr) => {
      if (!currentFreeMaterialArray[curr - 1]) {
        return null;
      }
      if (currentFreeMaterialArray[curr - 1].algorithm) {
        return curr - 1;
      } else {
        return prevIndexFinder(curr - 1);
      }
    };
    const prevIndex = prevIndexFinder(currentIndex);
    return prevIndex;
  };

  const findNextIndex = (currentIndex) => {
    const nextIndexFinder = (curr) => {
      if (!currentFreeMaterialArray[curr + 1]) {
        return null;
      }
      if (currentFreeMaterialArray[curr + 1].algorithm) {
        return curr + 1;
      } else {
        return nextIndexFinder(curr + 1);
      }
    };
    const nextIndex = nextIndexFinder(currentIndex);
    return nextIndex;
  };

  return (
    <Block safe center style={styles.home}>
      <Animatable.View animation="fadeInUp" delay={500} useNativeDriver={true}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.algorithmView}
          ref={scrollRef}
          removeClippedSubviews={true}
        >
          <Block style={styles.markdown}>
            <Markdown style={markdownStyles} mergeStyle={true}>
              {currentFreeMaterialArray[currentFreeMaterialsIndex].algorithm
                ? currentFreeMaterialArray[currentFreeMaterialsIndex].algorithm
                : ""}
            </Markdown>
          </Block>

          <Block style={styles.buttonContainer}>
            <TouchableOpacity
              disabled={prevIndex === null}
              style={[
                styles.pagination,
                { borderWidth: prevIndex !== null ? 5 : 0 },
              ]}
              onPress={onPressPrev}
            >
              {prevIndex !== null ? (
                <Fragment>
                  <View style={styles.previous}>
                    <Icon
                      name="doubleleft"
                      family="AntDesign"
                      size={10}
                      bold={true}
                      style={{ marginRight: 5 }}
                      color={argonTheme.COLORS.HEADER}
                    />
                    <Text style={{ color: argonTheme.COLORS.BLACK }}>
                      Previous
                    </Text>
                  </View>

                  <Text style={styles.prevTitle}>
                    {
                      currentFreeMaterialArray[
                        prevIndex ? prevIndex : currentFreeMaterialsIndex
                      ].title
                    }
                  </Text>
                </Fragment>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!nextIndex}
              style={[styles.pagination, { borderWidth: nextIndex ? 5 : 0 }]}
              onPress={onPressNext}
            >
              {nextIndex !== null ? (
                <Fragment>
                  <View style={styles.next}>
                    <Text style={{ color: argonTheme.COLORS.BLACK }}>Next</Text>
                    <Icon
                      name="doubleright"
                      family="AntDesign"
                      size={10}
                      bold={true}
                      style={{ marginLeft: 5 }}
                      color={argonTheme.COLORS.HEADER}
                    />
                  </View>
                  <Text style={styles.nextTitle}>
                    {
                      currentFreeMaterialArray[
                        nextIndex ? nextIndex : currentFreeMaterialsIndex
                      ].title
                    }
                  </Text>
                </Fragment>
              ) : null}
            </TouchableOpacity>
          </Block>

          <Block style={styles.emptyBlock}></Block>
        </ScrollView>
      </Animatable.View>
    </Block>
  );
};

export default FreeMaterialsDisplay;
