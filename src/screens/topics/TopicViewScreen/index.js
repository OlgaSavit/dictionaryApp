import Layout, {scrollTypes} from '@/components/Layout'
import React, {useMemo} from 'react'
import {View, Text} from 'react-native'
import {stylessheet} from './styles'
import {useTranslation} from 'react-i18next'
import TopNavigation from '@/components/navigation/TopNavigation'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import CustomButton, {ButtonTypes} from '@/components/Button'
import Icon from '@/components/Icon'
import Colors from '@/constants/theme'
import routerNameList from '@/navigation/routerNameList'
import LoadingView from '@/components/LoadingView'
import {useWordsListByTopic} from '@/screens/topics/TopicViewScreen/useWordsListByTopic'
import WordList from '@/components/words/WordList'

const TopicViewScreen = () => {
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const navigation = useNavigation()
  const {topicItem, isLoading, wordMode, onChangeMode} = useWordsListByTopic()

  const renderRightBtn = useMemo(() => {
    return (
      <View style={styles.wrapperAddIcon}>
        <CustomButton
          onPress={() => {
            navigation.navigate(routerNameList?.tasksForm)
          }}
          btnType={ButtonTypes.roundBtn}>
          <Icon name={'close'} size={12} color={Colors[theme].colors.dark} />
        </CustomButton>
      </View>
    )
  }, [])
  return (
    <Layout bottomBarShow={true} scrollType={scrollTypes.view}>
      <View style={styles.mainWrapper}>
        <TopNavigation
          customRightBtn={renderRightBtn}
          isShowLogo={false}
          title={topicItem?.title}
        />
        {isLoading ? (
          <LoadingView />
        ) : (
          <WordList
            list={topicItem?.words}
            wordMode={wordMode}
            onChangeMode={onChangeMode}
          />
        )}
      </View>
    </Layout>
  )
}
export default TopicViewScreen
