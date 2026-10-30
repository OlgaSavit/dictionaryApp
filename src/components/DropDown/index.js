import DropDownPicker from "react-native-dropdown-picker";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { stylessheet } from "./styles";
import { View } from "react-native";

const initialProps = {
  items: [],
  selectedValue: null,
  onSelectValue: () => {},
  disabled: false,
  onFetchList: () => {},
};

const DropDown = (props) => {
  const { theme } = useSelector((store) => store.theme);
  const styles = stylessheet(theme);
  const { t } = useTranslation();
  const {
    items,
    selectedValue,
    onSelectValue,
    disabled,
    onFetchList,
    ...rest
  } = {
    ...initialProps,
    ...props,
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);
  return (
    <View style={styles.wrapperDropDown}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onSelectItem={onSelectValue}
        disabled={disabled}
        zIndex={100}
        listMode="FLATLIST"
        searchPlaceholder={t("texts.search")}
        multipleText={t("texts.selectedItems", {
          count: selectedValue?.length,
        })}
        flatListProps={{
          initialNumToRender: 5,
          onEndReached: () => {
            onFetchList();
          },
        }}
        {...rest}
      />
    </View>
  );
};
export default DropDown;
