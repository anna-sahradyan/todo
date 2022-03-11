import React from 'react';
import {IconButton,Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, selectTodo} from "../../store/todoSlice";



const TodoFooter = () => {
    const todos = useSelector(selectTodo);
    let dispatch = useDispatch();


    const clearCompleted = () => {
        todos.filter(item => dispatch(deleteTodo(item.id)))


    }


    return (
        <div>

        <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete" onClick={clearCompleted}>
                <DeleteIcon/>
            </IconButton>
        </Stack>

    </div>
    );
};

export default TodoFooter;