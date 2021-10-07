import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import FabButton from "../../components/ActionButton";
import InterviewDisplay from "../../components/InterviewDisplay";

const InterviewScreenComponent = ({ route, navigation }) => {
  const language = route.params.name;
  const [scrollEnabled, setScrollEnabled] = React.useState(true);

  const { currentInterviewArray, currentInterviewIndex } = useSelector(
    (state) => {
      return {
        currentInterviewArray: state.interview[route.params.name].data,
        currentInterviewIndex: state.interview[route.params.name].currentIndex,
      };
    }
  );

  const toggleScroll = () => {
    setScrollEnabled(!scrollEnabled);
  };

  return (
    <Fragment>
      <InterviewDisplay
        {...{ language, currentInterviewArray, scrollEnabled, navigation }}
      />
      <FabButton
        toggleScroll={toggleScroll}
        currentIndex={currentInterviewIndex}
        currentArray={currentInterviewArray}
        navigation={navigation}
        language={language}
        screenLocked={!scrollEnabled}
        screen="InterviewMenu"
      />
    </Fragment>
  );
};

export default InterviewScreenComponent;
