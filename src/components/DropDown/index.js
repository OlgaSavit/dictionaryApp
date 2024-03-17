import {View} from 'react-native'
import {useSelector} from 'react-redux'
import {stylessheet} from './styles'
import {useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

const initialProps = {
  items: [],
  selectedValue: null,
  onChangeValue: () => {}
}

const DropDown = props => {
  const {theme} = useSelector(store => store.theme)
  const styles = stylessheet(theme)
  const {items, selectedValue, onChangeValue} = {...initialProps, ...props}
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  return (
    <View style={styles.wrapperDropDown}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        zIndex={100}
      />
    </View>
  )
}
export default DropDown
