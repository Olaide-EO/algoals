import React, { Fragment } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Block, Text } from "galio-framework";
import * as Animatable from "react-native-animatable";
import { useFocusEffect } from "@react-navigation/native";
import Markdown from 'react-native-markdown-display';
import { Icon } from "./";
import argonTheme from "../constants/Theme";
import { styles, markdownStyles } from "../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_INTERVIEW_TITLE,
  SET_CURRENT_INTERVIEW_INDEX,
} from "../redux/types";

const InterviewDisplay = ({
  language,
  currentInterviewArray,
}) => {

  const currentInterviewIndex = useSelector(
    (state) => state.interview[language].currentIndex
  );

  const [nextIndex, setNextIndex] = React.useState(null);
  const [prevIndex, setPrevIndex] = React.useState(null);
  const dispatch = useDispatch();
  const copyRef = React.useRef(null);
  const scrollRef = React.useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      setTitle();
      setPrevIndex(findPrevIndex(currentInterviewIndex));
      setNextIndex(findNextIndex(currentInterviewIndex));
    }, [currentInterviewIndex, language])
  );

  const scrollToTop = () => scrollRef.current.scrollTo({x: 0, y:0, animated: true});

  const setTitle = () => {
    dispatch({
      type: SET_INTERVIEW_TITLE,
      payload: currentInterviewArray[currentInterviewIndex].title,
    });
  };

  const setInterviewIndex = (index) => {
    dispatch({
      type: SET_CURRENT_INTERVIEW_INDEX,
      payload: { language, index },
    });
  };

  const onPressPrev = async () => {
   await setInterviewIndex(prevIndex);
    scrollToTop()
  };

  const onPressNext = async () => {
   await setInterviewIndex(nextIndex);
    scrollToTop()
  };

  const findPrevIndex = (currentIndex) => {
    const prevIndexFinder = (curr) => {
      if (curr - 1 < 0) {
        return null;
      }
      if (currentInterviewArray[curr - 1].algorithm) {
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
      if (!currentInterviewArray[curr + 1]) {
        return null;
      }
      if (currentInterviewArray[curr + 1].algorithm) {
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
              {currentInterviewArray[currentInterviewIndex].algorithm
                ? currentInterviewArray[currentInterviewIndex].algorithm
                : ""}
            </Markdown>
          </Block>

          <Block style={styles.buttonContainer}>
            <TouchableOpacity
              disabled={prevIndex === null}
              style={[styles.pagination, { borderWidth: prevIndex !== null ? 5 : 0 }]}
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
                      currentInterviewArray[
                        prevIndex ? prevIndex : currentInterviewIndex
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
              {nextIndex ? (
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
                      currentInterviewArray[
                        nextIndex ? nextIndex : currentInterviewIndex
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

export default InterviewDisplay;