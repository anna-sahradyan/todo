import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchTodo} from "./redux";

const App = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodo());
    }, [])
    return (
        <>

        </>
    );
};

export default App;