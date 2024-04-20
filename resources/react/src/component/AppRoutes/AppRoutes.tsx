import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../../Pages/Admin'
import { Inventory } from '../../Pages/Inventory'
import { EditProduct } from '../../Pages/EditProduct'
import { AddProduct } from '../../Pages/AddProduct'
import MovieListPage from '../../Pages/MovieListPage'
import Login from '../../Pages/Login';
import Show from '../../Pages/Show';

export const AdminRoutes = () => {
  return (

    <Routes>
      <Route path='/admin' element={<Admin />}></Route>
      <Route path='/inventory' element={<Inventory />}></Route>
      <Route path='/edit/:id' element={<EditProduct />}></Route>
      <Route path='/delete/:id' element={<Admin />}></Route>
      <Route path='/add' element={<AddProduct />}></Route>
      <Route path='/' element={<MovieListPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/show' element={<Show/>} />
    </Routes>

  )
}
