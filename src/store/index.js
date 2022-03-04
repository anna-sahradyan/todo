import {combineReducers} from "redux";
import todo from '../store/todoSlice';
const rootReducer = combineReducers({
    todo,
    devTools: true,
})
export default rootReducer;