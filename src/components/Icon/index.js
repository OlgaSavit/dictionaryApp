import json from "../../icomoon/selection.json";
import Icomoon from "react-native-icomoon";

export default function Icon({ name, ...restProps }) {
  return <Icomoon iconSet={json} name={name} {...restProps} />;
}
