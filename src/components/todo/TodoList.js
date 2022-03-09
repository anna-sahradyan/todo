import React from 'react';
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
import {selectTodo,} from "../../store/todoSlice";

const TodoList = () => {

    const todos = useSelector(selectTodo);


    return (
        <>
            <ul>
                {todos.map((item, index) => <TodoItem key={`${item}_${index}`} {...item} />)}

            </ul>
        </>
    );
};

export default TodoList;