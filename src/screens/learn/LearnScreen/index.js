import {View} from 'react-native'
import Layout from '@/components/Layout'
import TopNavigation from '@/components/navigation/TopNavigation'
import React, {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import LearnView from '@/components/learn/LearnView'
import CustomButton, {ButtonTypes} from '@/components/Button'
import routerNameList from '@/navigation/routerNameList'
import Icon from '@/components/Icon'
import Colors from '@/constants/theme'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'

const LearnScreen = () => {
  const {t} = useTranslation()
  const {theme} = useSelector(store => store.theme || {})
  const navigation = useNavigation()
  const {currentTopic} = useSelector(store => store.topic || {})
  const customRightBtn = useMemo(() => {
    return (
      <CustomButton
        onPress={() => {
          navigation.navigate(routerNameList?.checkWord)
        }}
        btnType={ButtonTypes.roundBtn}>
        <Icon name={'check'} size={14} color={Colors[theme].colors.green} />
      </CustomButton>
    )
  }, [theme])
  return (
    <Layout bottomBarShow={true}>
      <View style={{paddingHorizontal: 16}}>
        <TopNavigation
          title={t('texts.learnWords')}
          customRightBtn={customRightBtn}
        />
        <LearnView list={currentTopic?.words || []} />
      </View>
    </Layout>
  )
}
export default LearnScreen
