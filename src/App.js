import React from 'react';
import Nav from "./components/navBar";
import {Route, Routes} from 'react-router-dom';
import Home from "./components/home";
import TodoForm from "./components/todo/TodoForm";
const App = () => {
    return (
        <>
            <div className='wrapper'>
                <Nav/>

                <div className='main'>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/todo'} element={<TodoForm/>}/>



                    </Routes>
                </div>
            </div>

        </>
    );
};

export default App;