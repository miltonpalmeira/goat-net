import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Library from './pages/Library.jsx';
import Login from './pages/Login.jsx';
import Cadastro from './pages/SignUp.jsx';

export const AppRoutes = () => {
    return (
        <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/library" element={<Library />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
        </Routes>
    )
}