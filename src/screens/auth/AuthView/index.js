import TopNavigation from "@/components/navigation/TopNavigation";
import routerNameList from "@/navigation/routerNameList";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "@/components/Button";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import Layout from "@/components/Layout";
import Layout from "@/components/Layout";
import Input from "@/components/Input";
import Input from "@/components/Input";
import { stylessheet } from "./styles";
import { stylessheet } from "./styles";

const AppName = "Dictionary";
const AuthViewScreen = () => {
  const { theme } = useSelector((store) => store.theme || {});
  const navigation = useNavigation();
  const { t } = useTranslation();
  const styles = stylessheet(theme);
  const goToScreen = (path) => {
    navigation?.push(path);
  };
  return (
    <Layout>
      <View style={styles.mainWrapper}>
        <TopNavigation showBack={false} title={AppName} />
        <View style={styles.wrapperContent}>
          <View>
            <CustomButton
              testID={"goToSignInBtn"}
              onPress={() => {
                goToScreen(routerNameList?.signIn);
              }}
            >
              <Text>{t("auth.signInLabel")}</Text>
            </CustomButton>
            <CustomButton
              testID={"goToSignUpBtn"}
              onPress={() => {
                goToScreen(routerNameList?.signUp);
              }}
            >
              <Text>{t("auth.signUpLabel")}</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </Layout>
  );
};
export default AuthViewScreen;
