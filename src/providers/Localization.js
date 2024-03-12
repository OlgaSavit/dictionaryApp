import i18n from '@/i18n';
import {useEffect} from 'react';
import * as RNLocalize from 'react-native-localize';
import {useDispatch, useSelector} from 'react-redux';

export const Localization = () => {
  const dispatch = useDispatch();
  const {language} = useSelector(state => state.language);

  useEffect(() => {
    i18n.changeLanguage(language);
    requireLocale(language);
    // moment.locale(language)
  }, [language]);

  return null;
};

export const requireLocale = lng => {
  switch (lng) {
    case 'ua':
    //   require('moment/locale/sv')
    //   break
    case 'ru':
    // require('moment');
    // break
    default:
    // this is will be en
  }
};
