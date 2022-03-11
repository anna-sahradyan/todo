import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo, fetchAddTodos, selectTodo} from "../../store/todoSlice";
import TodoList from "./TodoList";
import s from './Todo.module.scss';
import {Box, IconButton, Pagination, Stack, TextField} from "@mui/material";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import TodoFooter from "./TodoFooter";
import Typography from "@mui/material/Typography";
import {brown} from "@mui/material/colors";

const TodoForm = () => {

    const todos = useSelector(selectTodo);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const {status, error} = useSelector(state => state.todo);
    const [page, setPage] = useState(1);
    const todosPerPage = 5;
    const pagesVisited = page * todosPerPage + 1;
    let itemsTodo = todos.slice(pagesVisited, pagesVisited + todosPerPage).map((item) => {
        return {...item}
    });


    const pageCount = Math.ceil(todos.length / todosPerPage - 1);
    const handleChange = (event, value) => {
        setPage(value);
    }

    useEffect(() => {
        dispatch(fetchAddTodos());
    }, [dispatch]);

    const addTodo = () => {
        if (inputValue.trim().length) {
            dispatch(addNewTodo(inputValue));


        }


        setInputValue('');
    }

    const submitList = (e) => {
        e.preventDefault();
    }
    const clickHandler = (e) => {
        setInputValue(e.target.value);
    }


    return (<>
        <div className={s.contentDiv}>
            <div className={s.content}>
                <div className={s.formPart}>
                    <form onSubmit={submitList}>
                        <Box className={s.boxInputShow}
                             sx={{
                                 width: 500, maxWidth: '80%',
                             }}
                        >

                            <TextField fullWidth label="todo" id="todo" className={s.textInput}
                                       autoFocus
                                       value={inputValue}
                                       onChange={clickHandler}/>
                            <IconButton color="primary" aria-label="add an alarm" className={s.iconBtn}
                                        type='submit' onClick={addTodo}>
                                <AddCircleOutlineRoundedIcon/>
                            </IconButton>

                        </Box>



                    </form>

                </div>

                <div className={s.partTodo}>

                    <TodoList itemsTodo={itemsTodo} addTodo={addTodo}/>

                </div>
                <div className={s.statusPage}>
                {status === 'loading' &&
<h2>Loading<b>....</b></h2>
                    }
                {error && <h2>An Error occurred:{error}</h2>}
                </div>
                <div className={s.page}>
                    <Stack spacing={2}>
                        <Typography>Page:{pageCount}</Typography>
                        <Pagination count={4} page={page} onChange={handleChange} sx={{
                            color: brown[800], '&.Mui-checked': {
                                color: brown[600],
                            },
                        }}
                        />
                    </Stack>

                </div>
                <div className={s.footerBox}>
                    <TodoFooter/>
                </div>


            </div>
        </div>

    </>);
};

export default TodoForm;