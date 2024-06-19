import {  Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Library } from './pages/Library';
import { Login } from './pages/Login';
import { Cadastro } from './pages/SignUp';

export const AppRoutes = () => {
    return (
        <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
    )
}