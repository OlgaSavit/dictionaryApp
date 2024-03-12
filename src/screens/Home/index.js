import {View, Text} from 'react-native';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

const HomeScreen = ({navigation}) => {
  return (
    <Layout bottomBarShow={true}>
      <View style={{backgroundColor: 'red', flex: 1, padding: 16}}>
        <Text testID={'homeScreen'}>Home</Text>
        <Button
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          Example
        </Button>
      </View>
    </Layout>
  );
};
export default HomeScreen;
