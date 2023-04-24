import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import store from './Store';
import { Provider } from 'react-redux';
import SignUp from './Components/SignUp/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path='*' element={<App />}></Route>
                <Route path='/' element={<SignIn />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
            </Routes>
        </Provider>
    </BrowserRouter>
);

