import {View} from 'react-native'
import {useSelector} from 'react-redux'
import {stylessheet} from './styles'
import {useEffect, useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

const initialProps = {
  items: [],
  selectedValue: null,
  onSelectValue: () => {},
  disabled: false
}

const DropDown = props => {
  const {theme} = useSelector(store => store.theme)
  const styles = stylessheet(theme)
  const {items, selectedValue, onSelectValue, disabled, ...rest} = {
    ...initialProps,
    ...props
  }
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  useEffect(() => {
    setValue(selectedValue)
  }, [selectedValue])
  return (
    <View style={styles.wrapperDropDown}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onSelectItem={onSelectValue}
        disabled={disabled}
        zIndex={100}
        {...rest}
      />
    </View>
  )
}
export default DropDown
