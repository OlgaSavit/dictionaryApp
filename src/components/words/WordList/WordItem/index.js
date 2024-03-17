import React, {useMemo} from 'react'
import {stylessheet} from './styles'
import {View, TouchableOpacity, Text} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from 'react-redux'
import routerNameList from '@/navigation/routerNameList'

const initialProps = {
  item: null,
  order: null
}

const WordItem = props => {
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const navigation = useNavigation()
  const styles = stylessheet(theme)
  const {item, order} = {...initialProps, ...props}

  const goToEditTask = item => {
    navigation.navigate(routerNameList?.tasksForm, {currentTask: item})
  }

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.wrapperTopBlock}>
          <Text style={styles.numberText}>{`${order}. `}</Text>
          <View style={styles.wrapperTitle}>
            <Text style={styles.title}>{item?.word}</Text>
            <Text style={styles.secondaryTitle}>{item?.wordPhonetic}</Text>
            <Text style={styles.translation}>{item?.wordTranslate}</Text>
          </View>
        </View>
        <Text style={styles.description}>{item?.description}</Text>
      </View>
      <View style={styles.wrapperCountBlock}>
        <Text style={[styles.countText, styles.countTextAll]}>
          {item?.status}
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
    </View>
  )
}
export default WordItem
