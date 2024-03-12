import {DEV_MODE} from '../config/env';
import rootReducer from './slices/index';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const debugMiddlewares = [];

if (DEV_MODE) {
  const createDebugger = require('redux-flipper').default;
  debugMiddlewares.push(createDebugger());
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(debugMiddlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export default store;
