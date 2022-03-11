import React, {useEffect, useState} from 'react';
import s from "./PaginationList.module.scss";
import {Pagination, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {brown} from "@mui/material/colors";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, fetchAddTodos, selectTodo, toggleStatus} from "../store/todoSlice";
import Checkbox from "@mui/material/Checkbox";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const PaginationList = ({id}) => {
    useEffect(()=>{
        dispatch(fetchAddTodos());
    },[dispatch])
    let dispatch = useDispatch();
    const toggleTodo = () => {
        dispatch(toggleStatus(id)
        )
    }

    const removeTodos = () => {
        dispatch(deleteTodo(id))
    };

    const todos = useSelector(selectTodo);
    const [page, setPage] = useState(1);
    const todosPerPage = 5;
    const pagesVisited = page * todosPerPage + 1;
    const todoData = todos.slise(pagesVisited,pagesVisited+todosPerPage).map((item, index) =>{
        return  <li key={`${item}_${index}`}>
            <Checkbox
                checked={item.completed}
                onChange={toggleTodo}
                sx={{
                    color: brown[800],
                    '&.Mui-checked': {
                        color: brown[600],
                    },
                }}
                style={{marginLeft: '-2px', marginTop: '-20px'}}/>
            <p className={s.titleItem}>{item.title}</p>

            <span><CancelOutlinedIcon onClick={removeTodos} className={s.icons}/></span>
        </li>


    })
    const handleChange = (event, value) => {
        setPage(value);
    }

    return (
        <>
            {todoData}
            <div className={s.page}>
                <Stack spacing={2}>
                    <Typography>Page: {page}</Typography>
                    <Pagination count={5} page={page} onChange={handleChange} sx={{
                        color: brown[800], '&.Mui-checked': {
                            color: brown[600],
                        },
                    }}/>
                </Stack>

            </div>
        </>
    );
};

export default PaginationList;