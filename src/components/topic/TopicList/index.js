import TopicItem from "@/components/topic/TopicList/TopicItem";
import { FlatList } from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { stylessheet } from "./styles";
import { View } from "react-native";
import React from "react";

const initialProps = {
  list: [],
  onChangePage: () => {},
  onUpdateTopicList: () => {},
};
const TopicList = (props) => {
  const { theme } = useSelector((store) => store.theme || {});
  const { t } = useTranslation();
  const styles = stylessheet(theme);
  const { list, onChangePage, onUpdateTopicList, ...rest } = {
    ...initialProps,
    ...props,
  };
  return (
    <View style={{ paddingTop: 20 }}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <TopicItem item={item} onUpdateTopicList={onUpdateTopicList} />
        )}
        onEndReached={() => {
          onChangePage();
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        {...rest}
      />
    </View>
  );
};
export default TopicList;
