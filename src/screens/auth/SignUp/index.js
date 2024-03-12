import Layout from '@/components/Layout'
import {TouchableOpacity, View, Image, Text} from 'react-native'
import Input from '@/components/Input'
import {stylessheet} from './styles'
import {useTranslation} from 'react-i18next'
import TopNavigation from '@/components/navigation/TopNavigation'

import googleImg from '@/assets/images/social/google.png'
import appleImg from '@/assets/images/social/apple.png'
import {useSelector} from 'react-redux'
import SignInForm from '@/components/auth/signInForm'
import SignUpForm from '@/components/auth/signUpForm'

const socialAuthOptionsList = [
  {
    id: 'google',
    onPress: params => {},
    label: 'auth.loginGoogle',
    image: googleImg
  },
  {
    id: 'apple',
    onPress: params => {},
    label: 'auth.loginApple',
    image: appleImg
  }
]

const SignInScreen = () => {
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  return (
    <Layout>
      <View style={styles.mainWrapper}>
        <TopNavigation
          showBack={true}
          isShowLogo={false}
          title={t('auth.signUpLabel')}
        />
        <View style={styles.wrapperSocialBtn}>
          {socialAuthOptionsList?.map(item => {
            return (
              <TouchableOpacity key={item?.id}>
                <View style={styles.wrapperImg}>
                  <Image style={styles.imgStyle} source={item?.image} />
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
        <View>
          <SignUpForm />
        </View>
      </View>
    </Layout>
  )
}
export default SignInScreen
