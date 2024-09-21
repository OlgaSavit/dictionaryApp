import {View} from 'react-native'
import Layout, {scrollTypes} from '@/components/Layout'
import TopNavigation from '@/components/navigation/TopNavigation'
import React from 'react'
import {useTranslation} from 'react-i18next'
import CheckView from '@/components/check/CheckView'
import {useSelector} from 'react-redux'

const CheckScreen = () => {
  const {t} = useTranslation()
  return (
    <Layout scrollType={scrollTypes.view} bottomBarShow={true}>
      <View style={{paddingHorizontal: 16, flex: 1}}>
        <TopNavigation title={t('texts.checkWords')} />
        <CheckView />
      </View>
    </Layout>
  )
}
export default CheckScreen
