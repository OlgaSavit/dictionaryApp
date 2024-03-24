import React, {useState} from 'react'
import {stylessheet} from './styles'
import {View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {FlatList} from 'react-native-gesture-handler'
import WordItem from '@/components/words/WordList/WordItem'
import WordMode from '@/components/words/WordMode'
import {WordModeTypes} from '@/constants/general'

const initialProps = {
  list: [],
  wordMode: WordModeTypes.default,
  onChangeMode: () => {},
  onUpdateWordsByTopic: () => {}
}
const WordList = props => {
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const {list, onChangeMode, wordMode, onUpdateWordsByTopic, ...rest} = {
    ...initialProps,
    ...props
  }
  return (
    <View style={styles.mainWrapper}>
      <WordMode onChangeMode={onChangeMode} wordMode={wordMode} />
      <View style={styles.wrapperFlatList}>
        <FlatList
          data={list}
          renderItem={({item, index}) => (
            <WordItem
              item={item}
              wordMode={wordMode}
              onUpdateWordsByTopic={onUpdateWordsByTopic}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 50
          }}
          {...rest}
        />
      </View>
    </View>
  )
}
export default WordList
