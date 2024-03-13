import {View, Text} from 'react-native'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import TopNavigation from '@/components/navigation/TopNavigation'
import React from 'react'
import {useTranslation} from 'react-i18next'

const HomeScreen = ({navigation}) => {
  const {t} = useTranslation()
  return (
    <Layout bottomBarShow={true}>
      <View style={{paddingHorizontal: 16}}>
        <TopNavigation title={t('texts.myTopics')} />
        <Text testID={'homeScreen'}>Dictionary</Text>
      </View>
    </Layout>
  )
}
export default HomeScreen
