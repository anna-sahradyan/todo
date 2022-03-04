import {setTodo, setTodoFailure, setTodoSuccess} from "../store/todoSlice";
import axios from "axios";

export const fetchTodo = () => (dispatch) => {

    dispatch(setTodo())


    try {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then(({data}) => {

            dispatch(setTodoSuccess(data))

        })

    } catch (error) {
        dispatch(setTodoFailure())
    }
}
