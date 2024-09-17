import {View} from 'react-native'
import {Swipeable} from 'react-native-gesture-handler'
const initialProps = {
  children: null,
  renderRightActions: () => {}
}

const SwipeComponent = props => {
  const {renderRightActions, children} = {...initialProps, ...props}
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View>{children}</View>
    </Swipeable>
  )
}
export default SwipeComponent
