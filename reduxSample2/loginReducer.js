import * as actions from './actionTypes';

const initialState = {
    isLogin: false
}
const authReducer = (state = initialState, action) => {

    if(action.type == actions.SAVE_ITEM){
        return{
            ...state,
            isLogin: action.login
        }
    }
    else if(action.type == actions.GET_ITEM){
        
        console.log("login sstate", state.isLogin);
        return {
           
            ...state,
           
            
        }
    }
    return state;
}
export default authReducer;