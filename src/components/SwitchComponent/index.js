import {stylessheet} from './styles';
import Colors from '../../constants/theme';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import ToggleSwitch from 'toggle-switch-react-native';
const initialProps = {
  isOn: false,
  styleContainer: null,
  label: '',
  onChange: () => {},
};
const SwitchComponent = props => {
  const {isOn, onChange, styleContainer, label} = {
    ...initialProps,
    ...props,
  };
  const {theme} = useSelector(store => store.theme);
  const styles = stylessheet(theme);
  const onSwitch = val => {
    onChange(val);
  };

  return (
    <View style={[styles.mainWrapper, styleContainer]}>
      <Text style={styles.labelStyle}>{label}</Text>
      <ToggleSwitch
        isOn={isOn}
        onColor={Colors[theme].colors.yellow}
        offColor={Colors[theme].colors.dark_30}
        trackOnStyle={styles.track}
        trackOffStyle={styles.track}
        thumbOffStyle={{backgroundColor: Colors[theme].colors.gray_100}}
        thumbOnStyle={styles.thumbStyle}
        size="medium"
        onToggle={val => onSwitch(val)}
      />
    </View>
  );
};
export default SwitchComponent;
