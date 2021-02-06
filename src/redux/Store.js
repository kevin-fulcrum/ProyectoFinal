import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware,compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import getRootReducer from '../redux/Reducer';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['ProductReducer'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, getRootReducer());

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    persistedReducer,
    undefined,
    componseEnhancer(applyMiddleware(createLogger(), thunk)),
  );

  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};
