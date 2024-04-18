import React, {useMemo, useState} from 'react'
import {stylessheet} from './styles'
import {View, TouchableOpacity, Text, Alert} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from 'react-redux'
import routerNameList from '@/navigation/routerNameList'
import Colors from '@/constants/theme'
import Icon from '@/components/Icon'
import {deleteTopicById} from '@/api/requests/topic'
import {useToast} from 'react-native-toast-notifications'
import {ToastTypes} from '@/constants/general'
import SwipeComponent from '@/components/SwipeComponent'

const initialProps = {
  item: null,
  order: null,
  onUpdateTopicList: () => {}
}

const TopicItem = props => {
  const toast = useToast()
  const {theme} = useSelector(store => store.theme || {})
  const {userInfo} = useSelector(store => store.user || {})
  const {t} = useTranslation()
  const navigation = useNavigation()
  const styles = stylessheet(theme)
  const {item, onUpdateTopicList} = {...initialProps, ...props}
  const [isRemoveLoading, setIsRemoveLoading] = useState(false)

  const goToEditTask = item => {
    navigation.navigate(routerNameList?.tasksForm, {currentTask: item})
  }
  const goToTopic = () => {
    navigation.navigate(routerNameList?.topicView, {topicId: item?.id})
  }
  const removeTopic = async () => {
    setIsRemoveLoading(true)
    try {
      const response = await deleteTopicById(item?.id)
      if (response?.status === 200) {
        onUpdateTopicList()
      }
    } catch (err) {
      toast.show(err.message, {type: ToastTypes.danger})
    } finally {
      setIsRemoveLoading(false)
    }
  }
  const handleRemoveTopicPress = () => {
    Alert.alert(`${t('texts.removeTopic')}:"${item?.title}"`, '', [
      {
        text: t('buttons.cancel'),
        onPress: () => {},
        style: 'cancel'
      },
      {
        text: t('buttons.confirm'),
        onPress: () => {
          removeTopic()
        }
      }
    ])
  }
  const normalizedTitle = useMemo(() => {
    let arr = item.title.split('/')
    return {
      mainTitle: arr?.length ? arr[0] : null,
      secondaryTitle: arr.length === 2 ? arr[1] : null
    }
  }, [item?.title])
  const renderRightActions = () => {
    if (item?.userId === userInfo?.id) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <TouchableOpacity
            disabled={isRemoveLoading}
            onPress={handleRemoveTopicPress}
            style={styles.wrapperActionBtn}>
            <Icon name="trash" size={22} color={Colors[theme].colors.red} />
          </TouchableOpacity>
        </View>
      )
    }
    return <></>
  }
  return (
    <SwipeComponent renderRightActions={renderRightActions}>
      <TouchableOpacity
        onPress={goToTopic}
        disabled={isRemoveLoading}
        style={[styles.mainWrapper]}>
        <View style={styles.contentWrapper}>
          <View style={styles.wrapperTopBlock}>
            <View style={styles.wrapperTitle}>
              <Text style={styles.title}>{normalizedTitle?.mainTitle}</Text>
              <Text style={styles.secondaryTitle}>
                {normalizedTitle.secondaryTitle}
              </Text>
            </View>
          </View>
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
      </TouchableOpacity>
    </SwipeComponent>
  )
}
export default TopicItem
