import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { stylessheet } from "./styles";

const initialProps = {
  list: [],
};
const TopUsersResultsView = (props) => {
  const { t } = useTranslation();
  const styles = stylessheet();
  const { list } = { ...initialProps, ...props };
  return (
    <View style={styles.wrapperBox}>
      <Text style={styles.title}>Top 10 users:</Text>

      <View style={styles.wrapperTable}>
        <View style={styles.wrapperRow}>
          <View style={styles.wrapperCol}>
            <Text style={[styles.txt, styles.txtBold]}>№</Text>
          </View>
          <View style={styles.wrapperCol}>
            <Text style={[styles.txt, styles.txtBold]}>
              {t("resultsView.user")}
            </Text>
          </View>
          <View style={styles.wrapperCol}>
            <Text style={[styles.txt, styles.txtBold]}>
              {t("resultsView.done")}
            </Text>
          </View>
          <View style={styles.wrapperCol}>
            <Text style={[styles.txt, styles.txtBold]}>
              {t("resultsView.tested")}
            </Text>
          </View>
        </View>
        {list?.map((item, ind) => {
          return (
            <View key={item.id} style={styles.wrapperRow}>
              <View style={styles.wrapperCol}>
                <Text style={[styles.txt]}>{ind + 1}</Text>
              </View>
              <View style={styles.wrapperCol}>
                <Text style={[styles.txt]}>{item?.name}</Text>
              </View>
              <View style={styles.wrapperCol}>
                <Text style={[styles.txt]}>{item?.statistic.wordsDone}</Text>
              </View>
              <View style={styles.wrapperCol}>
                <Text style={[styles.txt]}>{item?.statistic.words}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default TopUsersResultsView;
