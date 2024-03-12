import Icomoon from 'react-native-icomoon';
import json from '../../icomoon/selection.json';
export default function Icon({name, ...restProps}) {
  return <Icomoon iconSet={json} name={name} {...restProps} />;
}
