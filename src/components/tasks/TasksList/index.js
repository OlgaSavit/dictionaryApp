import React from 'react'
import {stylessheet} from './styles'
import {View, FlatList} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import TaskItem from '@/components/tasks/TasksList/TasksItem'

const initialProps = {
  list: []
}
const TasksList = props => {
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const {list} = {...initialProps, ...props}
  return (
    <View>
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <TaskItem item={item} order={index + 1} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
export default TasksList
