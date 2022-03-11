import React from 'react';
import {useSelector} from "react-redux";
import {selectTodo} from "../../store/todoSlice";
const PaginationList = ({ todosPerPage,  paginate }) => {
    const todos=useSelector(selectTodo);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos / todosPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default PaginationList;