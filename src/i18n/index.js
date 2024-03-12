import i18n from 'i18next';
import * as resources from './resources';
import {languages} from 'src/constants/language';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: languages.en.code,
  resources: {
    ...Object.entries(resources).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: {
          translation: value,
        },
      };
    }, {}),
  },
  lng: languages.en.code,
});

export default i18n;
