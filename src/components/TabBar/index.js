import {useMemo} from 'react';
import Icon from '../../components/Icon';
import {stylessheet} from './styles';
import Colors from '../../constants/theme';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
export const tabBarTypes = {
  client: 'client',
  specialist: 'specialist',
};
const tabBarClientList = [
  {
    name: 'tabBar.myDay',
    route: 'MyDayScreen',
    icon: 'today',
    screens: ['MyDayScreen'],
    indicator: true,
  },
  {
    name: 'tabBar.nutrition',
    route: 'DietScreen',
    icon: 'nutrition',
    screens: ['DietScreen'],
    indicator: false,
  },
  {
    name: 'tabBar.training',
    route: '',
    icon: 'training',
    screens: '',
    indicator: false,
  },
  {
    name: 'tabBar.subscription',
    route: '',
    icon: 'abonement',
    screens: [''],
    indicator: false,
  },
  {
    name: 'tabBar.more',
    route: 'Settings',
    icon: 'more',
    screens: ['Settings'],
    indicator: false,
  },
];
const tabBarSpecialist = [
  {
    name: 'tabBar.clients',
    route: 'MyDayScreen',
    icon: 'users',
    screens: ['MyDayScreen'],
    indicator: true,
  },
  {
    name: 'tabBar.reviews',
    route: '',
    icon: 'star-outline',
    screens: [],
    indicator: false,
  },
  {
    name: 'tabBar.team',
    route: '',
    icon: 'logo',
    screens: [],
    indicator: false,
  },

  {
    name: 'tabBar.more',
    route: 'Settings',
    icon: 'more',
    screens: ['Settings'],
    indicator: false,
  },
];
const initialProps = {
  type: tabBarTypes.client,
};
const TabBarComponent = props => {
  const route = useRoute();
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {type} = {...initialProps, ...props};
  const {theme} = useSelector(store => store.theme);
  const {language} = useSelector(state => state.language);
  const styles = stylessheet(theme);
  const currentRoute = useMemo(() => {
    return route.name;
  }, [route]);
  const goPage = path => {
    navigation.navigate(path);
  };
  const list = useMemo(() => {
    return type === tabBarTypes.client ? tabBarClientList : tabBarSpecialist;
  }, []);

  return (
    <View style={styles.tabsContainer}>
      <View style={styles.wrapperTabs}>
        {list.map((item, ind) => {
          return (
            <TouchableOpacity
              onPress={() => {
                item?.route && goPage(item.route);
              }}
              style={styles.wrapperItem}
              key={ind}>
              <View style={styles.parentWrapper}>
                <Icon
                  color={
                    item.screens.includes(currentRoute)
                      ? Colors[theme].colors.dark
                      : Colors[theme].colors.inputPlaceholderColor
                  }
                  name={item.icon}
                  size={24}
                />
                {!!item.indicator && (
                  <View style={styles.wrapperIndicator}>
                    <View style={styles.circleIndicator} />
                  </View>
                )}
              </View>

              <Text
                style={
                  item.screens.includes(currentRoute)
                    ? [styles.label, styles.labelActive]
                    : styles.label
                }>
                {t(item.name)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.tabsOverlay} />
    </View>
  );
};
export default TabBarComponent;
