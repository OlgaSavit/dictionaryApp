import Layout, {scrollTypes} from '@/components/Layout'
import React from 'react'
import {stylessheet} from './styles'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {View} from 'react-native'
import TopNavigation from '@/components/navigation/TopNavigation'
import {useRoute} from '@react-navigation/native'
import WordForm from '@/components/words/forms/WordForm'

const WordFormScreen = () => {
  const router = useRoute()
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const {currentTopicId, currentWord} = router?.params || {}
  return (
    <Layout scrollType={scrollTypes.view}>
      <View style={styles.mainWrapper}>
        <TopNavigation
          showBack={true}
          title={currentWord ? t('words.editWord') : t('words.createWord')}
        />
        <WordForm currentTopicId={currentTopicId} currentWord={currentWord} />
      </View>
    </Layout>
  )
}
export default WordFormScreen
