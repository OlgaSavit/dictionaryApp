import React from 'react'
import {stylessheet} from './styles'
import {View} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {FlatList} from 'react-native-gesture-handler'
import TopicItem from '@/components/topic/TopicList/TopicItem'

const initialProps = {
  list: [],
  onChangePage: () => {}
}
const TopicList = props => {
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const {list, onChangePage, ...rest} = {...initialProps, ...props}
  return (
    <View style={{paddingTop: 20}}>
      <FlatList
        data={list}
        renderItem={({item, index}) => <TopicItem item={item} />}
        onEndReached={() => {
          onChangePage()
        }}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        {...rest}
      />
    </View>
  )
}
export default TopicList
