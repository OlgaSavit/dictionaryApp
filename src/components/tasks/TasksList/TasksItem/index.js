import React from 'react'
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

const TaskItem = props => {
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
        <Text style={styles.title}>
          <Text style={styles.numberText}>{`${order}. `}</Text>
          {item?.title}
        </Text>
        <Text style={styles.description}>{item?.description}</Text>
      </View>
      <View style={styles.wrapperButtons}>
        <TouchableOpacity
          onPress={() => goToEditTask(item)}
          style={styles.wrapperActionBtn}>
          <Icon name={'edit'} size={22} color={Colors[theme].colors.gray_100} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperActionBtn}>
          <Icon name="trash" size={22} color={Colors[theme].colors.red} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default TaskItem
