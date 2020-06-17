import { createStore, applyMiddleware } from 'redux';

import  rootReducer from './rootReducer'
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import { AsyncStorage } from 'react-native';
import authReducer from './loginReducer';

// export default const store = createStore(reducer);

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  whitelist: ['auth', 'normal'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

 const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
//  console.log(store);
export {
store,
persistor
};



