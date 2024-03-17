import React from 'react'
import {stylessheet} from './styles'
import {View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {FlatList} from 'react-native-gesture-handler'
import WordItem from '@/components/words/WordList/WordItem'

const initialProps = {
  list: []
}
const WordList = props => {
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const {list, ...rest} = {...initialProps, ...props}
  return (
    <View style={{paddingTop: 20}}>
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <WordItem item={item} order={index + 1} />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        {...rest}
      />
    </View>
  )
}
export default WordList
