import React, {useMemo} from 'react'
import {stylessheet} from './styles'
import {View, TouchableOpacity, Text} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from 'react-redux'
import routerNameList from '@/navigation/routerNameList'
import {WordModeTypes} from '@/constants/general'
import {Blurhash} from 'react-native-blurhash'
import Colors from '@/constants/theme'

const initialProps = {
  item: null,
  order: null,
  wordMode: WordModeTypes.default
}

const WordItem = props => {
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const navigation = useNavigation()
  const styles = stylessheet(theme)
  const {item, order, wordMode} = {...initialProps, ...props}

  const goToEditTask = item => {
    navigation.navigate(routerNameList?.tasksForm, {currentTask: item})
  }
  const renderModeContent = mode => {
    return (
      <View style={styles.wrapperTitle}>
        <Blurhash
          blurhash={
            mode === WordModeTypes.translation
              ? 'LGFFaXYk^6#M@-5c,1J5@[or[Q6.'
              : null
          }
          style={mode === WordModeTypes.translation && styles.blurStyle}>
          <Text style={styles.title}>{item?.word}</Text>
          <Text style={styles.secondaryTitle}>{item?.wordPhonetic}</Text>
        </Blurhash>
        <View>
          <Blurhash
            blurhash={
              mode === WordModeTypes.word
                ? 'LGFFaXYk^6#M@-5c,1J5@[or[Q6.'
                : null
            }
            style={mode === WordModeTypes.word && styles.blurStyle}>
            <Text style={[styles.translation]}>{item?.wordTranslate}</Text>
          </Blurhash>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.wrapperTopBlock}>
          {renderModeContent(wordMode)}
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
