import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import FuzzySearch from "fuzzy-search";
import { Block, Text, theme } from "galio-framework";
import { useFocusEffect, useScrollToTop } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "debounce";
import {
  SET_CURRENT_LEETCODE_INDEX,
  SET_LEETCODE_TITLE,
} from "../../redux/types";
import { argonTheme } from "../../constants";
import Input from "../../components/Input";
import Icon from "../../components/Icon";

const { width } = Dimensions.get("screen");

const Search = ({ route, navigation }) => {
  const currentScreen = route.params.name;
  const [searchString, setSearchString] = useState("");
  const [searcher, setSearcher] = useState(null);
  const dispatch = useDispatch();
  const ref = React.useRef(null);

  const currentLeetcodeArray = useSelector(
    (state) => state.leetcode[currentScreen].data
  );

  useFocusEffect(
    useCallback(() => {
      setTitle("Search");
    }, [])
  );

  useEffect(() => {
    setSearcher(
      new FuzzySearch(currentLeetcodeArray, ["title"], {
        caseSensitive: false,
        sort: true,
      })
    );
  }, [currentLeetcodeArray]);

  useScrollToTop(ref);

  const setTitle = (search) => {
    dispatch({
      type: SET_LEETCODE_TITLE,
      payload: search,
    });
  };

  const onChange = debounce((text) => setSearchString(text), 200, true);

  const filteredEmails = searcher?.search(searchString) || [];

  const setLeetcodeIndex = (index, title) => {
    dispatch({
      type: SET_CURRENT_LEETCODE_INDEX,
      payload: { language: currentScreen, index, title },
    });
  };

  const navigateAfterPress = () => {
    navigation.navigate("Leetcodes", {
      screen: currentScreen,
    });
  };

  const onPress = async (index, title) => {
    await setLeetcodeIndex(index, title);
    navigateAfterPress(index);
  };

  const renderItem = (algorithm) => {
    if (!algorithm.algorithm) return null;
    if (algorithm.type === "hidden") return null;
    return (
      <TouchableOpacity
        onPress={() => onPress(algorithm.index, algorithm.title)}
      >
        <View style={styles.listView}>
          <Text style={styles.searchText}>{algorithm.title}</Text>
          <Text
            animation="fadeInUp"
            iterationCount={45}
            style={styles.timeComplexity}
          >
            {algorithm.category}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Block style={styles.container}>
      <Input
        right
        style={styles.search}
        placeholder="Search for algorithms"
        onChangeText={onChange}
        defaultValue={searchString}
        iconContent={
          <Icon
            size={16}
            color={theme.COLORS.MUTED}
            name="search-zoom-in"
            family="ArgonExtra"
          />
        }
      />
      <FlatList
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name + "-" + item.index}
        style={styles.searchView}
        ref={ref}
        data={filteredEmails}
        renderItem={({ item }) => renderItem(item)}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: argonTheme.COLORS.WHITE,
    zIndex: 5,
    width: width,
    paddingBottom: theme.SIZES.BASE,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 5,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.OUTLINE,
    zIndex: 1,
    color: argonTheme.COLORS.BLACK,
  },
  searchView: {
    width: width - theme.SIZES.BASE * 2,
    marginRight: theme.SIZES.BASE,
    marginLeft: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE + 10,
  },
  listView: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  searchText: {
    textTransform: "capitalize",
    color: argonTheme.COLORS.HEADER,

    fontSize: 15,
  },
  timeComplexity: {
    color: argonTheme.COLORS.MUTED,
  },
  searchInput: {
    padding: 10,
    borderColor: "#CCC",
    borderWidth: 1,
  },
});

export default Search;
