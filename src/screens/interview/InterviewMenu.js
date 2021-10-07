import React from "react";
import { ScrollView, View } from "react-native";
import { Block, theme } from "galio-framework";
import { useSelector, useDispatch } from "react-redux";
import { arrayToTree } from "performant-array-to-tree";
import TreeView from "react-native-final-tree-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { MenuItem } from "../../components";
import MenuButton from "../../components/MenuButton";
import { MenuStyle as styles } from "../../constants/styles";

const languageReducer = (language) => {
  switch (language) {
    case "Cplusplus":
      return "C++";
    case "Chash":
      return "C#";
    default:
      return language;
  }
};

const InterviewMenu = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const menuRef = React.useRef(null);

  const currentInteviewArray = useSelector(
    (state) => state.interview[route.params.language].data
  );

  const data = arrayToTree(currentInteviewArray, {
    id: "id",
    parentId: "category",
    childrenField: "children",
    dataField: null,
  });

  const language = languageReducer(route.params.language);

  const setInterviewIndex = (index, title) => {
    dispatch({
      type: "SET_CURRENT_INTERVIEW_INDEX",
      payload: { language: language, index, title },
    });
  };

  const navigateAfterPress = () => {
    navigation.navigate(language);
  };

  const renderNode = ({ node, level, isExpanded }) => {
    return (
      <View style={{ height: 45 }}>
        <MenuItem
          isCategory={!node.algorithm}
          title={node.title || node.name}
          key={Math.random() * 10000000}
          level={level}
          isExpanded={isExpanded}
          focused={node.id === route.params.id ? true : false}
        />
      </View>
    );
  };

  return (
    <>
      <Block
        style={styles.container}
        center
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <ScrollView
          ref={menuRef}
          style={styles.menuList}
          showsVerticalScrollIndicator={false}
        >
          <SafeAreaView>
            <View style={{ height: theme.SIZES.BASE * 2 }} />
            <TreeView
              data={data}
              idKey="id"
              childrenKey="children"
              initialExpanded={false}
              renderNode={renderNode}
              onNodePress={({ node, level }) => {
                if (node.algorithm) {
                  setInterviewIndex(node.index, node.title);
                  navigateAfterPress(node.index);
                }
              }}
              getCollapsedNodeHeight={() => 40}
            />
            <View style={{ height: theme.SIZES.BASE * 3 }} />
          </SafeAreaView>
        </ScrollView>
      </Block>
      <MenuButton navigation={navigation} />
    </>
  );
};

export default InterviewMenu;
