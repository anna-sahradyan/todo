import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import React from 'react';
import s from "./Todo.module.scss";
import {deleteTodo, toggleStatus} from "../../store/todoSlice";
import {useDispatch} from "react-redux";
import { brown} from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
const TodoItem = ({title, id, completed}) => {
    let dispatch = useDispatch();

    const toggleTodo = () => {
        dispatch(toggleStatus(id)
        )
    }

    const removeTodos = () => {
        dispatch(deleteTodo(id))
    }
    return (
        <div>

                <li>
                    <Checkbox
                        checked={completed}
                        defaultChecked
                        onChange={toggleTodo}
                        sx={{
                            color: brown[800],
                            '&.Mui-checked': {
                                color: brown[600],
                            },
                        }}
                        style={{marginLeft:'-2px',marginTop:'-20px'}}/>
                    <p className={s.titleItem}>{title}</p>

                    <span><CancelOutlinedIcon onClick={removeTodos} className={s.icons } /></span>
                </li>


        </div>
    );
};

export default TodoItem;