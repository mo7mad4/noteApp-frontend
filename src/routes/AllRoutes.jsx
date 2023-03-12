import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage'
import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import SignUpPage from "../pages/SignUpPage";
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element ={<HomePage />}> </Route>
            <Route path="/register" element ={<SignUpPage />}> </Route>
            <Route path="/login" element ={<LoginPage />}> </Route>
            <Route path="/notes" element ={<NotesPage />}> </Route>
        </Routes>
    )
}

export default AllRoutes;