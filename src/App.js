import './App.css';
import { BrowserRouter  } from 'react-router-dom';
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';

function App() {
  return (
    <BrowserRouter>
      <AdminRoute/>
      <UserRoute/>
    </BrowserRouter>
  );
}

export default App;
