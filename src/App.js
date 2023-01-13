import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Select from './Select';
import { Route, Routes } from 'react-router-dom';
import Edit from './Edit';
import Login_Page from './Login/Login';
import Dashboard from './Login/Dash';
import Edit_Dash from './Login/Edit';
import Logout from './Login/Logout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login_Page />} />
        <Route path='/home' element={<Home />} />
        <Route path='/select' element={<Select />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/dash/:user_id' element={<Dashboard />} />
        <Route path='/edit-dash/:edit_id' element={<Edit_Dash />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
