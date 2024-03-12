import React, {useMemo} from 'react';
import {stylessheet} from './styles';
import {useSelector} from 'react-redux';
import TabBarComponent from '../../components/TabBar';
import Colors, {themeTypes} from '../../constants/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Platform,
  StatusBar,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
export const scrollTypes = {
  scrollView: 'scrollView',
  view: 'view',
};
const initialProps = {
  styleContainer: {},
  statusBarTheme: null,
  refreshControl: null,
  scrollOptions: {},
  styleScrollView: {},
  fixedTopComponent: null,
  scrollType: scrollTypes.scrollView,
  notification: null,
  bottomSheetComponent: null,
  bottomSheetComponentBg: false,
};

const Layout = props => {
  const {
    children,
    styleContainer,
    statusBarTheme,
    refreshControl,
    bottomBarShow,
    scrollOptions,
    styleScrollView,
    fixedTopComponent,
    scrollType,
    notification,
    bottomSheetComponent,
    bottomSheetComponentBg,
  } = {
    ...initialProps,
    ...props,
  };
  const {theme} = useSelector(store => store.theme || {});

  const insets = useSafeAreaInsets();

  const styles = stylessheet(theme);
  const barTheme = useMemo(() => {
    if (typeof statusBarTheme !== 'undefined' && !!statusBarTheme) {
      return statusBarTheme;
    }
    return theme;
  }, [statusBarTheme, theme]);
  const renderScrollComponent = () => {
    return scrollType === scrollTypes.scrollView ? (
      <ScrollView
        refreshControl={refreshControl}
        contentContainerStyle={[styles.scrollViewStyles, styleScrollView]}
        {...scrollOptions}>
        {children}
      </ScrollView>
    ) : (
      <View
        style={styles.flexStyle}
        refreshControl={refreshControl}
        contentContainerStyle={[styles.scrollViewStyles, styleScrollView]}
        {...scrollOptions}>
        {children}
      </View>
    );
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={
          Platform.OS === 'android'
            ? 'transparent'
            : Colors[barTheme]?.colors.appBackground
        }
        translucent={Platform.OS === 'android'}
        barStyle={
          barTheme !== themeTypes.dark ? 'dark-content' : 'light-content'
        }
      />
      <View
        style={[
          styles.layoutContainer,
          {
            paddingTop: insets.top || StatusBar.currentHeight,
            paddingBottom: insets.bottom,
          },
          bottomSheetComponentBg && styles.bottomSheetComponentBg,
          styleContainer,
        ]}>
        {notification}
        <KeyboardAvoidingView
          style={styles.keyboardStyles}
          behavior={Platform.OS === 'ios' ? 'padding' : ''}>
          {fixedTopComponent}
          {renderScrollComponent()}
          {bottomBarShow && <TabBarComponent />}
          {bottomSheetComponent && bottomSheetComponent}
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default Layout;
