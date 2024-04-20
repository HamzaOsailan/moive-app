import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieListPage from '../../Pages/MovieListPage';
import Login from '../../Pages/Login';

export const GuestRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MovieListPage />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    );
}
