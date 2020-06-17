import * as actions from './actionTypes';
import { act } from 'react-test-renderer'
import { NetInfo } from 'react-native';


 export const itemHasErrored = bool =>{
    return {
        type: actions.ITEMS_ERROR,
        hasErrored: bool,
    };
}
 export const itemHasLoading = bool => {
    return {
        type: actions.ITEMS_LOADING,
        isLoading: bool,
    };
}
 export const itemsFetchDataSuccess = items => {
    return{
        type: actions.ITEMS_FETCH_DATA_SUCCESS,
         items: items,
    };
}
export const itemGetid = id =>{
    return{
        type: actions.ITEMS_GET_ID,
        id: id,
    }
}
export const saveLogin = TrueOrfalse =>{
    return{
        type: actions.SAVE_ITEM,
        login: TrueOrfalse
    }
}
export const getLogin = () => {
     return{
         type: actions.GET_ITEM,
         
     }
}
export const changeStatusInternet = (isConnected) =>{
    return{
        type: actions.INTERNET_CHANGE,
        status: isConnected,
    }
}
export const getDataFromCache = () => {
    return{
        type: actions.GET_DATA_FROM_CACHE,
    }
}
// export function errorAfterFiveSeconds(){
//     return(dispatch) => {
//         setTimeout(() => {
//             dispatch(itemHasErrored(true))
//         }, 5000)
//     }
// }
export function itemsFetchData(url) {
    return(dispatch) =>{
        dispatch(itemHasLoading(true));
        fetch(url)
        .then((response) => {
            if(!response.ok){
                throw Error(response.statusText);
            }
            dispatch(itemHasLoading(false));
            return response;
        })
        .then((response) => 
            response.json()
        )
        
        .then(items => {
            // console.log("Itmes ", items);

            dispatch(itemsFetchDataSuccess(items))
        })
        .catch(() => dispatch(itemHasErrored(true)))
    }
}

export function getDetailsById(id){
    return(dispatch)=>{
            dispatch(itemGetid(id));
    }
}
export function getData(){
    return(dispatch)=>{
        dispatch(getDataFromCache());
}
}
