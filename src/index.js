import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./store";
const store = configureStore({
    reducer: rootReducer,
})

ReactDOM.render(

<BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
</BrowserRouter>
 ,
  document.getElementById('root')
);


