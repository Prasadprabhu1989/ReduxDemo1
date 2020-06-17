import authReducer from './loginReducer';
import reducer from './reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers(
    {
     auth: authReducer,
      normal: reducer
        
    }
)
export default rootReducer;