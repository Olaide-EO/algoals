import React, { useMemo } from "react";
import {
  ScrollView,
  View,
} from "react-native";
import { Block, theme } from "galio-framework";
import { useSelector, useDispatch } from "react-redux";
import { arrayToTree } from "performant-array-to-tree";
import TreeView from "react-native-final-tree-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { MenuItem } from "../../components";
import MenuButton from "../../components/MenuButton";
import {MenuStyle as styles } from "../../constants/styles";

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

const AlgorithmMenu = ({ route, navigation }) => {  
  const dispatch = useDispatch();
  const menuRef = React.useRef(null);
  const insets = useSafeAreaInsets();
  
  const currentAlgorithmArray = useSelector(
    (state) => state.algorithm[route.params.language].data
  );
  
  const data = useMemo(() => {
  return arrayToTree(currentAlgorithmArray, {
      id: "id",
      parentId: "category",
      childrenField: "children",
      dataField: null,
    });
  }, [currentAlgorithmArray, route.params]) 

  const language = useMemo(() => {
    return languageReducer(route.params.language);
  }, [route.params])

  const setAlgorithmIndex = (index, title) => {
    dispatch({
      type: "SET_CURRENT_ALGORITHM_INDEX",
      payload: { language: route.params.language, index, title },
    });
  };

  const navigateAfterPress = (index) => {
    navigation.navigate(language);
  };

  const findCategoryIndex = (currentIndex) => {
    const prevIndexFinder = (curr) => {
      if (
        currentAlgorithmArray[curr - 1].readme
      ) {
        return curr - 1;
      } else {
        return prevIndexFinder(curr - 1);
      }
    };
    const prevIndex = prevIndexFinder(currentIndex);
    return prevIndex;
  };

  const handleNodePress = async ({node, level}) => {
    let index = node.index;
     if (node.algorithm) {
       if(node.type === "hidden"){
         index = findCategoryIndex(node.index)
       }
      await setAlgorithmIndex(index, null);
       navigateAfterPress(index);
     }
 }

  const renderNode = ({ node, level, isExpanded, hasChildrenNodes }) => {
    return (
      <View 
      style={{ height: 45}}
      >
        <MenuItem
          isCategory={!node.algorithm}
          title={node?.title || node.name}
          key={node.title + Math.random() * 10000000}
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
          <View style={{height: theme.SIZES.BASE * 2}} />
          <TreeView
            data={data}
            idKey="id"
            childrenKey="children"
            initialExpanded={false}
            renderNode={renderNode}
            onNodePress={handleNodePress}
            getCollapsedNodeHeight={() => 45}
          />
          <View style={{height: theme.SIZES.BASE * 3}} />
          </SafeAreaView>
        </ScrollView>
      </Block>
      <MenuButton navigation={navigation} />
    </>
  );
};


export default AlgorithmMenu;
