import React from 'react';
import TodoItem from "./TodoItem";


const TodoList = ({itemsTodo}) => {



    return (
        <>
            <ul>
                {itemsTodo.map((item, index) => <TodoItem key={`${item}_${index}`} {...item} />)}

            </ul>
        </>
    );
};

export default TodoList;