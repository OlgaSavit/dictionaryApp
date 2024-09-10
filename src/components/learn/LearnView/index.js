import {View, Text, TouchableOpacity} from 'react-native'
import {useRoute} from '@react-navigation/native'
import LearnCard from '@/components/learn/LearnCard'
import {useMemo, useState} from 'react'
import {stylessheet} from './styles'
import {useSelector} from 'react-redux'

const LearnView = () => {
  const {theme} = useSelector(store => store.theme || {})
  const styles = stylessheet(theme)
  const router = useRoute()
  const {list} = router?.params || {}
  const [activeInd, setActiveInd] = useState(0)
  const onPressNext = current => {
    if (current + 1 < list?.length) {
      setActiveInd(current + 1)
    }
  }
  const onPressPrev = current => {
    if (current > 0) {
      setActiveInd(current - 1)
    }
  }
  const isDisabledPrev = useMemo(() => {
    return activeInd === 0
  }, [activeInd])
  const isDisabledNext = useMemo(() => {
    return activeInd === list.length - 1
  }, [activeInd])
  console.log('list', list)
  return (
    <View style={{flex: 1}}>
      <LearnCard item={list[activeInd]} />
      <View style={styles.wrapperBtns}>
        <TouchableOpacity
          disabled={isDisabledPrev}
          style={
            isDisabledPrev
              ? [styles.wrapperBtn, styles.wrapperBtnDisabled]
              : styles.wrapperBtn
          }
          onPress={() => {
            onPressPrev(activeInd)
          }}>
          <Text style={styles.wrapperBtnTxt}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isDisabledNext}
          style={
            isDisabledNext
              ? [styles.wrapperBtn, styles.wrapperBtnDisabled]
              : styles.wrapperBtn
          }
          onPress={() => {
            onPressNext(activeInd)
          }}>
          <Text style={styles.wrapperBtnTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default LearnView
