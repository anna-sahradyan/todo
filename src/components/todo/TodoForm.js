import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {addNewTodo,  fetchAddTodos} from "../../store/todoSlice";
import TodoList from "./TodoList";
import s from './Todo.module.scss';
import {Box, IconButton, TextField} from "@mui/material";


import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import TodoFooter from "./TodoFooter";
const TodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchAddTodos());
    },[dispatch]);
    const addTodo = () => {
        if (inputValue.trim().length) {
            dispatch(addNewTodo(inputValue));

            setInputValue('');

        }


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
                                 width: 400, maxWidth: '80%',
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
                        {/*{status === 'loading' && <h2>Loading...</h2>}*/}
                        {/*{error && <h2>An Error occured:{error}</h2>}*/}

                        {/*second input*/}
                        {/*<Box className={s.boxInputHide}*/}
                        {/*     sx={{*/}
                        {/*         width: 400, maxWidth: '80%',*/}
                        {/*     }}*/}
                        {/*>*/}
                        {/*    <TextField fullWidth label="todo" id="todo" className={s.textInputHide} autoFocus*/}
                        {/*               value={inputValue}/>*/}
                        {/*    <IconButton color="primary" aria-label="add an alarm" className={s.iconBtnHide}*/}
                        {/*                type='submit'>*/}
                        {/*        <UpdateIcon/>*/}
                        {/*    </IconButton>*/}

                        {/*</Box>*/}

                    </form>

                    </div>
                <div className={s.partTodo}>
                    <TodoList/>
                </div>
                    <div className={s.footerBox}>

                        <TodoFooter/>

                    </div>



            </div>
        </div>

    </>);
};

export default TodoForm;