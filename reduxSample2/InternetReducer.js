import * as actions from './actionTypes';
// import {} from './action';

const initialState = {
    isConnected: false
}

const internetReducer = (state = initialState, action) =>{
    if(action.type == actions.INTERNET_CHANGE){
        return{
            ...state,
            isConnected: action.status,
        }

    }
    return state;

}