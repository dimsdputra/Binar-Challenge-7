import React, { Fragment } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import AddCars from '../pages/Components/AdminDashboard/AddCars'
import Car from '../pages/Components/AdminDashboard/Car'
import Dashboard from '../pages/Components/AdminDashboard/Dashboard'
import Admin from '../pages/Layouts/Admin'

const ProtectedUserRoute = () => {
  if (!localStorage.getItem("access_token")) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />;
}
function AdminRoute() {
  return (
    <Fragment>

      <Routes>
        <Route element={<ProtectedUserRoute/>}>
          <Route element={<Admin menu="DASHBOARD" listMenu={[{listName: "Dashboard", link: "/dashboard"}]}/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
          </Route>
          <Route element={<Admin menu="CARS" listMenu={[{listName: "Cars", link: "/cars"}]}/>}>
            <Route path='cars' element={<Car/>}/>
            <Route path='cars/addcars' element={<AddCars/>}/>
          </Route>
        </Route>
      </Routes>
  
    </Fragment>
  )
}

export default AdminRoute