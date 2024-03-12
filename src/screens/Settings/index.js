import {stylessheet} from './style'
import Icon from '../../components/Icon'
import Layout from '../../components/Layout'
import {useTranslation} from 'react-i18next'
import React, {useMemo} from 'react'
import {setTheme} from '../../store/slices/themeSlice'
import {useDispatch, useSelector} from 'react-redux'
import Colors, {themeTypes} from '../../constants/theme'
import {Alert, Text, TouchableOpacity, View} from 'react-native'
import SwitchComponent from '../../components/SwitchComponent'
import TopNavigation from '../../components/navigation/TopNavigation'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

const Settings = ({navigation}) => {
  const {theme} = useSelector(store => store.theme || {})
  const {language} = useSelector(state => state.language || {})
  const dispatch = useDispatch()
  const langObj = {ua: 'Українська', en: 'English', ru: 'Русский'}
  const handleThemePress = async () => {
    const newTheme =
      theme === themeTypes.dark ? themeTypes.light : themeTypes.dark
    await dispatch(setTheme(newTheme))
    await changeNavigationBarColor(Colors[newTheme].colors.dark_30)
  }
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const settingList = useMemo(() => {
    return [
      {
        id: 1,
        title: 'settingsList.language',
        value: langObj[language],
        link: 'LanguageScreen'
      },
      {id: 4, title: 'fields.password', link: 'NewPasswordScreen'},
      {
        id: 5,
        title: 'settingsList.nightMode',
        onPress: () => {},
        type: 'switch'
      }
    ]
  }, [language])
  const goToScreen = path => {
    navigation.navigate(path)
  }
  const renderItem = item => {
    if (item?.link) {
      return (
        <TouchableOpacity
          onPress={() => {
            goToScreen(item?.link)
          }}
          style={styles.wrapperItem}
          key={item.id}>
          <Text style={styles.title}>{t(item.title)}</Text>
          <Text style={styles.valueText}>{t(item.value)}</Text>
          <View style={styles.wrapperArrowRight}>
            <Icon
              color={Colors[theme]?.colors.dark_300}
              size={14}
              name={'chevron-right'}
            />
          </View>
        </TouchableOpacity>
      )
    }
    if (!item.onPress) {
      return (
        <View
          style={[styles.wrapperItem, styles.wrapperItemRight]}
          key={item.id}>
          <Text style={styles.title}>{t(item.title)}</Text>
          <Text style={styles.valueText}>{t(item.value)}</Text>
        </View>
      )
    }
    return (
      <View style={styles.wrapperItem} key={item.id}>
        <Text style={styles.title}>{t(item.title)}</Text>
        <Text style={styles.valueText}>{t(item.value)}</Text>
        <Text style={styles.valueText} testID={'themeText'}>
          {theme === themeTypes.dark ? 'dark' : 'light'}
        </Text>
        <View style={styles.wrapperArrowRight}>
          <SwitchComponent
            isOn={theme === themeTypes.dark}
            onChange={handleThemePress}
          />
        </View>
      </View>
    )
  }
  const handleLogoutPress = () => {
    Alert.alert(t('settingsList.confirmLogout'), '', [
      {
        text: t('buttons.cancel'),
        onPress: () => {},
        style: 'cancel'
      },
      {
        text: t('buttons.confirm'),
        onPress: () => {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'PublicScreens'
              }
            ]
          })
        }
      }
    ])
  }
  return (
    <Layout>
      <View style={styles.mainWrapper}>
        <TopNavigation title={t('personalMenu.settings')} />
        <View>
          <View style={styles.wrapperList}>
            {settingList.map(item => {
              return renderItem(item)
            })}
          </View>
          <TouchableOpacity onPress={handleLogoutPress}>
            <Text style={styles.exitText}>{t('buttons.logout')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

export default Settings
