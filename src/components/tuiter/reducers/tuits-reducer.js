import {CREATE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT, DELETE_TUIT} from "./actions/tuits-actions"
const tuitsReducer = (state = [], action) => {
    switch (action.type){
        case FIND_ALL_TUITS:
            return action.tuitList;
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [action.tuit, ...state];
        case UPDATE_TUIT:
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) return action.tuit;
                else return tuit;
            });
        default:
            return state;
    }

}

export default tuitsReducer;