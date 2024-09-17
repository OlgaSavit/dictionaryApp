import {View, Text} from 'react-native'
import {stylessheet} from './styles'
import {useTranslation} from 'react-i18next'

const LoadingView = () => {
  const {t} = useTranslation()
  const styles = stylessheet()
  return (
    <View style={styles.wrapperContent}>
      <Text>{t('texts.loading')}...</Text>
    </View>
  )
}
export default LoadingView
