import {useMemo} from 'react'
import Icon from '../../components/Icon'
import {stylessheet} from './styles'
import Colors from '../../constants/theme'
import {useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {TouchableOpacity, View, Text} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import routerNameList from '@/navigation/routerNameList'

const tabBarList = [
  {
    name: 'tabBar.home',
    route: routerNameList.home,
    icon: 'users',
    screens: [routerNameList.home],
    indicator: false
  },
  {
    name: 'tabBar.topic',
    route: routerNameList.topicList,
    icon: 'list',
    screens: [routerNameList.topicList],
    indicator: false
  },
  {
    name: 'tabBar.savedTopic',
    route: '',
    icon: 'star-outline',
    screens: [],
    indicator: false
  },
  {
    name: 'tabBar.settings',
    route: routerNameList.settings,
    icon: 'settings',
    screens: [routerNameList.settings],
    indicator: false
  }
]
const initialProps = {}
const TabBarComponent = props => {
  const route = useRoute()
  const navigation = useNavigation()
  const {t} = useTranslation()
  const {theme} = useSelector(store => store.theme)
  const {language} = useSelector(state => state.language)
  const styles = stylessheet(theme)
  const currentRoute = useMemo(() => {
    return route.name
  }, [route])
  const goPage = path => {
    navigation.navigate(path)
  }
  const list = useMemo(() => {
    return tabBarList
  }, [])

  return (
    <View style={styles.tabsContainer}>
      <View style={styles.wrapperTabs}>
        {list.map((item, ind) => {
          return (
            <TouchableOpacity
              onPress={() => {
                item?.route && goPage(item.route)
              }}
              style={styles.wrapperItem}
              key={ind}>
              <View style={styles.parentWrapper}>
                <Icon
                  color={
                    item.screens.includes(currentRoute)
                      ? Colors[theme].colors.dark
                      : Colors[theme].colors.inputPlaceholderColor
                  }
                  name={item.icon}
                  size={24}
                />
                {!!item.indicator && (
                  <View style={styles.wrapperIndicator}>
                    <View style={styles.circleIndicator} />
                  </View>
                )}
              </View>

              <Text
                style={
                  item.screens.includes(currentRoute)
                    ? [styles.label, styles.labelActive]
                    : styles.label
                }>
                {t(item.name)}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={styles.tabsOverlay} />
    </View>
  )
}
export default TabBarComponent
