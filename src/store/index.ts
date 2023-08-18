import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {appReducer} from './reducers';
// import {logger} from 'redux-logger';
import {myChecklistSaga} from '../sagas/myChecklistSaga';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['mychecklistreducer'],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    sagaMiddleware,
    // logger
  ],
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

sagaMiddleware.run(myChecklistSaga);
