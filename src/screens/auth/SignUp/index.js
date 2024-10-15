import TopNavigation from "@/components/navigation/TopNavigation";
import { TouchableOpacity, View, Image } from "react-native";
import googleImg from "@/assets/images/social/google.png";
import appleImg from "@/assets/images/social/apple.png";
import SignUpForm from "@/components/auth/signUpForm";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Layout from "@/components/Layout";
import { stylessheet } from "./styles";

const socialAuthOptionsList = [
  {
    id: "google",
    onPress: (params) => {},
    label: "auth.loginGoogle",
    image: googleImg,
  },
  {
    id: "apple",
    onPress: (params) => {},
    label: "auth.loginApple",
    image: appleImg,
  },
];

const SignInScreen = () => {
  const { theme } = useSelector((store) => store.theme || {});
  const { t } = useTranslation();
  const styles = stylessheet(theme);
  return (
    <Layout>
      <View style={styles.mainWrapper}>
        <TopNavigation
          showBack={true}
          isShowLogo={false}
          title={t("auth.signUpLabel")}
        />
        <View style={styles.wrapperSocialBtn}>
          {socialAuthOptionsList?.map((item) => {
            return (
              <TouchableOpacity key={item?.id}>
                <View style={styles.wrapperImg}>
                  <Image style={styles.imgStyle} source={item?.image} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          <SignUpForm />
        </View>
      </View>
    </Layout>
  );
};
export default SignInScreen;
