import {stylessheet} from './styles'
import {useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'
import {TouchableOpacity, View, Text} from 'react-native'
const initialProps = {
  item: null,
  onChange: () => {},
  styleContainer: {},
  active: false
}
const RadioButtonItem = props => {
  const {t} = useTranslation()
  const {item, onChange, active, styleContainer} = {...initialProps, ...props}
  const {theme} = useSelector(store => store.theme)
  const styles = stylessheet(theme, active)
  const onChangeActive = () => {
    onChange(item?.id)
  }

  return (
    <TouchableOpacity
      onPress={onChangeActive}
      style={[styles.mainWrapper, styleContainer]}>
      {item?.label && <Text style={styles.label}>{t(item?.label)}</Text>}
      <View style={styles.wrapperItem}>
        {active && <View style={styles.activeItem} />}
      </View>
    </TouchableOpacity>
  )
}
export default RadioButtonItem
