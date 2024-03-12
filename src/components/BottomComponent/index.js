import React, {useMemo} from 'react';
import Icon from '../../components/Icon';
import {stylessheet} from './styles';
import Colors from '../../constants/theme';
import {useSelector} from 'react-redux';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
const initialProps = {
  children: null,
  bottomSheetRef: null,
  setIsOpenBottomModal: () => {},
  isOpenBottomModal: false,
  title: '',
  showLeftIcon: true,
};
const BottomComponent = props => {
  const {
    bottomSheetRef,
    setIsOpenBottomModal,
    isOpenBottomModal,
    children,
    title,
    showLeftIcon,
  } = {
    ...initialProps,
    ...props,
  };
  const {theme} = useSelector(store => store.theme);
  const styles = stylessheet(theme);
  const handleClosePress = () => bottomSheetRef.current.close();
  return (
    <>
      {isOpenBottomModal && (
        <>
          <BottomSheet
            animateOnMount={true}
            enableDynamicSizing={true}
            backgroundStyle={styles.bottomSheetBackgroundStyle}
            containerStyle={styles.bottomSheetContainerStyle}
            style={styles.bottomSheetStyle}
            ref={bottomSheetRef}
            detached={false}
            enablePanDownToClose={true}
            handleIndicatorStyle={styles.handleIndicatorStyle}
            onClose={() => {
              setIsOpenBottomModal(false);
            }}>
            <BottomSheetView style={styles.bottomSheetView}>
              <View style={styles.wrapperTopBlock}>
                <View style={styles.wrapperFlex}>
                  {showLeftIcon && (
                    <View style={styles.wrapperIcon}>
                      <Icon
                        color={Colors[theme].colors.dark}
                        size={20}
                        name={'warning'}
                      />
                    </View>
                  )}

                  <Text style={styles.title}>{title}</Text>
                </View>
                <TouchableOpacity
                  onPress={handleClosePress}
                  style={styles.wrapperCloseBtn}>
                  <Icon
                    name={'close'}
                    size={14}
                    color={Colors[theme].colors.dark_300}
                  />
                </TouchableOpacity>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {children}
              </ScrollView>
            </BottomSheetView>
          </BottomSheet>
        </>
      )}
    </>
  );
};
export default BottomComponent;
