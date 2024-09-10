import {View} from 'react-native'
import Layout from '@/components/Layout'
import TopNavigation from '@/components/navigation/TopNavigation'
import React from 'react'
import {useTranslation} from 'react-i18next'
import LearnView from '@/components/learn/LearnView'

const LearnScreen = () => {
  const {t} = useTranslation()
  return (
    <Layout bottomBarShow={true}>
      <View style={{paddingHorizontal: 16}}>
        <TopNavigation title={t('texts.learnWords')} />
        <LearnView />
      </View>
    </Layout>
  )
}
export default LearnScreen
