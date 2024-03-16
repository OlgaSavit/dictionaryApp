import React, {useMemo} from 'react'
import {stylessheet} from './styles'
import {View, TouchableOpacity, Text} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from 'react-redux'
import Icon from '@/components/Icon'
import Colors from '@/constants/theme'
import routerNameList from '@/navigation/routerNameList'

const initialProps = {
  item: null,
  order: null
}

const TopicItem = props => {
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const navigation = useNavigation()
  const styles = stylessheet(theme)
  const {item, order} = {...initialProps, ...props}

  const goToEditTask = item => {
    navigation.navigate(routerNameList?.tasksForm, {currentTask: item})
  }
  const normalizedTitle = useMemo(() => {
    let arr = item.title.split('/')
    return {
      mainTitle: arr?.length ? arr[0] : null,
      secondaryTitle: arr.length === 2 ? arr[1] : null
    }
  }, [item?.title])

  return (
    <TouchableOpacity style={styles.mainWrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.wrapperTopBlock}>
          <Text style={styles.numberText}>{`${order}. `}</Text>
          <View style={styles.wrapperTitle}>
            <Text style={styles.title}>{normalizedTitle?.mainTitle}</Text>
            <Text style={styles.secondaryTitle}>
              {normalizedTitle.secondaryTitle}
            </Text>
          </View>
        </View>
        <Text style={styles.description}>{item?.description}</Text>
      </View>
      <View style={styles.wrapperCountBlock}>
        <Text style={[styles.countText, styles.countTextAll]}>
          {item?.wordsCount}
        </Text>
        <Text style={styles.countText}>/</Text>
        <Text style={[styles.countText, styles.countTextDone]}>
          {item?.wordsDoneCount}
        </Text>
      </View>

      {/*<View style={styles.wrapperButtons}>*/}
      {/*  <TouchableOpacity*/}
      {/*    onPress={() => goToEditTask(item)}*/}
      {/*    style={styles.wrapperActionBtn}>*/}
      {/*    <Icon name={'edit'} size={22} color={Colors[theme].colors.gray_100} />*/}
      {/*  </TouchableOpacity>*/}
      {/*  <TouchableOpacity style={styles.wrapperActionBtn}>*/}
      {/*    <Icon name="trash" size={22} color={Colors[theme].colors.red} />*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
    </TouchableOpacity>
  )
}
export default TopicItem
