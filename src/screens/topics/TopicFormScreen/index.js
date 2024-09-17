import Layout, {scrollTypes} from '@/components/Layout'
import React from 'react'
import {stylessheet} from './styles'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {View} from 'react-native'
import TopNavigation from '@/components/navigation/TopNavigation'
import {useRoute} from '@react-navigation/native'
import TopicForm from '@/components/topic/forms/TopicForm'

const TopicFormScreen = () => {
  const router = useRoute()
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const {currentTopic} = router?.params || {}
  return (
    <Layout scrollType={scrollTypes.view}>
      <View style={styles.mainWrapper}>
        <TopNavigation
          showBack={true}
          title={currentTopic ? t('texts.editTask') : t('topic.createTopic')}
        />
        <TopicForm currentTopic={currentTopic} />
      </View>
    </Layout>
  )
}
export default TopicFormScreen
