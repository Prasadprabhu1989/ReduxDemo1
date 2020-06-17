const { act } = require("react-test-renderer");
import * as actions from './actionTypes';



let lastid = 0
let initialState= {
    isLoading: false,
    hasErrored: false,
    lists: [],
    id:[]

}

export default function reducer(state = initialState, action) {
  if (action.type == actions.ITEMS_ERROR) {
        return{
            ...state,
            
                isLoading: action.isLoading,
                hasErrored: action.hasErrored,
                    lists: []
                    

               
            
        };
       
        
    }
    else if(action.type == actions.ITEMS_LOADING){
        return {
            ...state,
            isLoading: action.isLoading,
            
            // hasErrored: action.hasErrored

        }
    }
    else if(action.type == actions.ITEMS_FETCH_DATA_SUCCESS){
        console.log("Action items: ", action.items);


        return{
            ...state,
            isLoading: false,
            lists: action.items,
            hasErrored: false,
        }
    }
    else if(action.type == actions.ITEMS_GET_ID){
        console.log("Action id: ", action.id);
        return{
            ...state,
            
            id: state.lists.filter(item => 
               
                item.id == action.id
            )

        }
    }
    else if(action.type == actions.GET_DATA_FROM_CACHE){
        console.log("Action id: ", action.id);
        return{
            state,
            // lists: state,
        }
    }
    return state;
}