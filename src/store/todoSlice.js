import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
//get json from server
export const fetchAddTodos = createAsyncThunk('todo/fetchAddTodos', async function (_, {rejectWithValue}) {

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=1&_limit=20`);
        if (!response.ok) {
            throw new Error('Server Error!');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
// delete
export const deleteTodo = createAsyncThunk('todo/deleteTodo', async function (id, {rejectWithValue, dispatch}) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            throw  new Error('Can\'t delete task,Server error')
        }
        dispatch(removeTodo({id}))
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
//toggle
export const toggleStatus = createAsyncThunk('todo/toggleStatus',
    async function (id, {rejectWithValue, dispatch, getState}) {
        const checkTodo = getState().todo.todo.find(item => item.id === id);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {

                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !checkTodo.completed,
                })
            });
            if (!response.ok) {
                throw  new Error('Can\'t toggle status.Server error')
            }
            const data = await response.json();
            dispatch(toggleTodoComplete({id}))
        } catch (error) {

        }

    });
//addNewTodo
export const addNewTodo = createAsyncThunk('todo/addNewTodo', async function (inputValue, {rejectWithValue, dispatch}) {
    try {
        const newTodo = {
            title: inputValue,
            userId: 1,
            completed: false,
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        });
        if (!response.ok) {
            throw  new Error('Can\'t add task .Server error')
        }
        const data = await response.json();
        dispatch(addTodos(data));
    } catch (error) {
        return rejectWithValue(error.message);
    }

})
const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodos: (state, action) => {
            state.todo.push({
                id: Math.floor(Math.random() * 1000),
                title: action.payload.title,
                completed: false,
            });
        },
        removeTodo: (state, action) => {
            state.todo = state.todo.filter(item => item.id !== action.payload.id);

        },
        toggleTodoComplete: (state, action) => {
            const toggledTodo = state.todo.find(item => item.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
    },


    extraReducers: {
        [fetchAddTodos.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchAddTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todo = action.payload;

        },
        [fetchAddTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
        [toggleStatus.rejected]: setError,
        [addNewTodo.rejected]: setError,

    }

});

 const {toggleTodoComplete, removeTodo, addTodos} = todoSlice.actions;
export const selectTodo = state => state.todo.todo;
export default todoSlice.reducer;