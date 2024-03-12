import Layout from '@/components/Layout'
import React from 'react'
import {stylessheet} from './styles'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {View} from 'react-native'
import TopNavigation from '@/components/navigation/TopNavigation'
import {useRoute} from '@react-navigation/native'
import TaskForm from '@/components/tasks/forms/TaskForm'

const TaskFormScreen = () => {
  const router = useRoute()
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const {currentTask} = router?.params || {}
  return (
    <Layout>
      <View style={styles.mainWrapper}>
        <TopNavigation
          showBack={true}
          title={currentTask ? t('texts.editTask') : t('texts.createTask')}
        />
        <TaskForm currentTask={currentTask} />
      </View>
    </Layout>
  )
}
export default TaskFormScreen
