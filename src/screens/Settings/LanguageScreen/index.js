import TopNavigation from "@/components/navigation/TopNavigation";
import RadioButtonItem from "@/components/RadioButtonItem";
import { setLanguage } from "@/store/slices/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { stylessheet } from "./style";
import { View } from "react-native";
import React from "react";

const LanguageScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store.theme);
  const { language } = useSelector((state) => state.language);
  const langObj = { ua: "Українська", en: "English" };
  const handleLanguagePress = (lng) => {
    dispatch(setLanguage(lng));
  };
  const { t } = useTranslation();
  const styles = stylessheet(theme);
  return (
    <Layout>
      <View style={styles.mainWrapper}>
        <TopNavigation title={t("texts.language")} />
        {Object.keys(langObj).map((item) => {
          return (
            <View style={styles.wrapperItem} key={item}>
              <RadioButtonItem
                onChange={(lang) => {
                  handleLanguagePress(lang);
                }}
                active={item === language}
                item={{ id: item, label: langObj[item] }}
              />
            </View>
          );
        })}
      </View>
    </Layout>
  );
};

export default LanguageScreen;
