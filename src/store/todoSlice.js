import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: [],

    },
    loading: false,
    hasErrors: false,
    reducers: {
        setTodo: state => {
            state.loading = true;

        },

        setTodoSuccess: (state, {payload}) => {
            state.todo = payload;
            state.loading = false
            state.hasErrors = false
        },
        setTodoFailure: state => {
            state.loading = false
            state.hasErrors = true
        },

    }

});

export const {setTodo, setTodoSuccess, setTodoFailure} = todoSlice.actions;
export const selectTodo = state => state.todo.todo;
export default todoSlice.reducer;