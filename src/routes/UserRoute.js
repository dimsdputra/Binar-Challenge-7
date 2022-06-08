import {Fragment} from 'react';
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import Detail from '../pages/Components/UserSearch/Detail';
import Invoice from '../pages/Components/UserSearch/Invoice';
import Search from '../pages/Components/UserSearch/Search';
import SearchResult from '../pages/Components/UserSearch/SearchResult';
import Home from '../pages/Home';

const HandleLogin = () => {
  if (localStorage.getItem("access_token")) {
      return <Navigate to="/" replace />
  }
  return <Outlet />;
}
function UserRoute() {

  return (
    <Fragment>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="hasil" element={<SearchResult />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="invoice" element={<Invoice />} />
        </Routes>
        <Routes>
            <Route element={<HandleLogin/>}>
              <Route path='login' element={<Login/>}/>
              <Route path='register' element={<Register/>}/>
            </Route>
        </Routes>
  
      </Fragment>
  )
}

export default UserRoute