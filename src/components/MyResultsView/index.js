import {View, Text} from 'react-native'
import {useTranslation} from 'react-i18next'
import {stylessheet} from './styles'
import {useSelector} from 'react-redux'

const initialProps = {
  statistic: null
}
const MyResultsView = props => {
  const {theme} = useSelector(store => store.theme || {})
  const {t} = useTranslation()
  const styles = stylessheet(theme)
  const {statistic} = {...initialProps, ...props}
  return (
    <View style={styles.wrapperBox}>
      <Text style={styles.title}>{t('resultsView.myResults')}</Text>
      <View style={styles.wrapperList}>
        <View style={styles.wrapperItem}>
          <Text style={styles.txt}>{t('resultsView.totalWords')}:</Text>
          <Text style={[styles.txt, styles.txtBold]}>
            {statistic.topicWords}
          </Text>
        </View>
        <View style={styles.wrapperItem}>
          <Text style={styles.txt}>{t('resultsView.testedWords')}:</Text>
          <Text style={[styles.txt, styles.txtBold, styles.txtGrey]}>
            {statistic.words}
          </Text>
        </View>
        <View style={styles.wrapperItem}>
          <Text style={styles.txt}>{t('resultsView.doneWords')}:</Text>
          <Text style={[styles.txt, styles.txtBold, styles.txtGreen]}>
            {statistic.wordsDone}
          </Text>
        </View>
        <View style={styles.wrapperItem}>
          <Text style={styles.txt}>{t('resultsView.translatedWords')}</Text>
          <Text style={[styles.txt, styles.txtBold, styles.txtYellow]}>
            {statistic.wordsTranslate}
          </Text>
        </View>
        <View style={styles.wrapperItem}>
          <Text style={styles.txt}>{t('resultsView.writeWords')}</Text>
          <Text style={[styles.txt, styles.txtBold, styles.txtBlue]}>
            {statistic.words - statistic.wordsDone - statistic.wordsTranslate}
          </Text>
        </View>
      </View>
    </View>
  )
}
export default MyResultsView
